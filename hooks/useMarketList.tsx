import { useMemo, useCallback } from 'react'
import useConnection from './useConnection'
import { PublicKey } from '@solana/web3.js'
import useMangoStore from '../stores/useMangoStore'
import { IDS } from '@blockworks-foundation/mango-client'

const useMarketList = () => {
  const mangoGroupName = useMangoStore((state) => state.selectedMangoGroup.name)
  const { cluster, programId, dexProgramId } = useConnection()

  const spotMarkets = useMemo(
    () => IDS[cluster]?.mango_groups[mangoGroupName]?.spot_market_symbols || {},
    [cluster, mangoGroupName]
  )

  const symbolsForMangoGroup = useMemo(
    () => IDS[cluster]?.mango_groups[mangoGroupName]?.symbols || {},
    [cluster, mangoGroupName]
  )

  const marketList = useMemo(
    () =>
      Object.entries(spotMarkets).map(([name, address]) => {
        return {
          address: new PublicKey(address as string),
          programId: new PublicKey(dexProgramId as string),
          deprecated: false,
          name,
        }
      }),
    [spotMarkets, dexProgramId]
  )

  const getTokenIndex = useCallback(
    (address) =>
      Object.entries(symbolsForMangoGroup).findIndex((x) => x[1] === address),
    [symbolsForMangoGroup]
  )

  return {
    programId,
    marketList,
    spotMarkets,
    symbols: symbolsForMangoGroup,
    getTokenIndex,
  }
}

export default useMarketList
