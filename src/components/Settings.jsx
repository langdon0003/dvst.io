import React from 'react';
import { Switch, Typography } from 'antd';
import { usePreferences } from '../utils/preferences';

const { Paragraph } = Typography;

export default function Settings({ autoApprove }) {
  // const { autoSettleEnabled, setAutoSettleEnabled } = usePreferences();
  return null;
  // return (
  //   <div>
  //     <Switch
  //       style={{ marginRight: 10 }}
  //       disabled={!autoApprove}
  //       checked={autoApprove && autoSettleEnabled}
  //       onChange={setAutoSettleEnabled}
  //     />{' '}
  //     Auto settle
  //     {!autoApprove && (
  //       <Paragraph style={{ color: '#06F0FF', marginTop: 10 }}>
  //         To use auto settle, first enable auto approval in your wallet
  //       </Paragraph>
  //     )}
  //   </div>
  // );
}
