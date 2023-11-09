import React, { FC } from 'react';
import { useAppSelector } from '../../../../app/store/hook';
import { selectSlotCurrentBet } from '../../slices/slotSlice';

interface ISlotInfoPanelProps {

};

const SlotInfoPanel: FC<ISlotInfoPanelProps> = ({ }) => {
  const currentBet = useAppSelector(selectSlotCurrentBet);
  return (
    <div>
      <div>
        <div>Balance: </div>
        <div>10000</div>
      </div>
      <div>
        <div>Bet: </div>
        <div>{currentBet}</div>
      </div>
    </div>
  )
};

export default SlotInfoPanel;