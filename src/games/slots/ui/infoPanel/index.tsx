import React, { FC, useState } from 'react';
import { useAppSelector } from '../../../../app/store/hook';
import { SlotLifecycle, selectSlotCurrentBet, selectSlotLifecycle } from '../../slices/slotSlice';
import { selectBalance } from '../../../../entities/wallet/slices/walletSlice';
import { useEffect } from 'react';

interface ISlotInfoPanelProps {

};

const SlotInfoPanel: FC<ISlotInfoPanelProps> = ({ }) => {
  const currentBet = useAppSelector(selectSlotCurrentBet);
  const balance = useAppSelector(selectBalance);
  const [displayBalance, setDisplayBalance] = useState(balance);
  const lifecycle = useAppSelector(selectSlotLifecycle);
  const isInfo = lifecycle === SlotLifecycle.INFO;

  useEffect(() => {
    if (isInfo) setDisplayBalance(balance)
  }, [isInfo, balance])
  return (
    <div>
      <div>
        <div>Balance: </div>
        <div>{displayBalance ?? 0}</div>
      </div>
      <div>
        <div>Bet: </div>
        <div>{currentBet}</div>
      </div>
    </div>
  )
};

export default SlotInfoPanel;