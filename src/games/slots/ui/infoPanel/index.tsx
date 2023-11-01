import React, { FC } from 'react';

interface ISlotInfoPanelProps {

};

const SlotInfoPanel: FC<ISlotInfoPanelProps> = ({ }) => {
  return (
    <div>
      <div>
        <div>Balance: </div>
        <div>10000</div>
      </div>
      <div>
        <div>Bet: </div>
        <div>300</div>
      </div>
    </div>
  )
};

export default SlotInfoPanel;