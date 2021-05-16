import { ACCOUNT_LAYOUT } from '@blockworks-foundation/mango-client'
import { Connection, PublicKey } from '@solana/web3.js'
import * as bs58 from 'bs58'
import { AccountInfo as TokenAccount } from '@solana/spl-token'
import { TokenInstructions } from '@project-serum/serum'

export const TOKEN_PROGRAM_ID = new PublicKey(
  'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
)

export type ProgramAccount<T> = {
  publicKey: PublicKey
  account: T
}

export function parseTokenAccountData(
  data: Buffer
): { mint: PublicKey; owner: PublicKey; amount: number } {
  const { mint, owner, amount } = ACCOUNT_LAYOUT.decode(data)
  return {
    mint: new PublicKey(mint),
    owner: new PublicKey(owner),
    amount,
  }
}

export async function getOwnedTokenAccounts(
  connection: Connection,
  publicKey: PublicKey
): Promise<ProgramAccount<TokenAccount>[]> {
  const filters = getOwnedAccountsFilters(publicKey)
  // @ts-ignore
  const resp = await connection._rpcRequest('getProgramAccounts', [
    TokenInstructions.TOKEN_PROGRAM_ID.toBase58(),
    {
      commitment: connection.commitment,
      filters,
    },
  ])
  if (resp.error) {
    throw new Error(
      'failed to get token accounts owned by ' +
        publicKey.toBase58() +
        ': ' +
        resp.error.message
    )
  }
  return resp.result.map(({ pubkey, account: { data } }) => {
    data = bs58.decode(data)
    return {
      publicKey: new PublicKey(pubkey),
      account: parseTokenAccountData(data),
    }
  })
}

export function getOwnedAccountsFilters(publicKey: PublicKey) {
  return [
    {
      memcmp: {
        offset: ACCOUNT_LAYOUT.offsetOf('owner'),
        bytes: publicKey.toBase58(),
      },
    },
    {
      dataSize: ACCOUNT_LAYOUT.span,
    },
  ]
}
