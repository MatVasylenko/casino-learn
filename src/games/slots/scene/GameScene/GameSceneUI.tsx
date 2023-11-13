import React, { FC, ReactNode } from 'react';
import SlotBetsPanel from '../../ui/betsPanel';
import SlotInfoPanel from '../../ui/infoPanel';
import SlotEventPanel from '../../ui/eventPanel';

interface ISlotGameSceneUIProps {
  children: ReactNode;
};

const SlotGameSceneUI:FC<ISlotGameSceneUIProps> = ({
  children
}) => {
  return (
    <div className="relative">
      <div className="absolute left-[50%] bottom-[3%] translate-x-[-50%]">
        <SlotBetsPanel />
      </div>
      <div className="absolute left-[3%] top-[30%]">
        <SlotInfoPanel />
      </div>
      <div className="absolute right-[9%] bottom-[15%]">
        <SlotEventPanel />
      </div>
      {children}
    </div>
  )
};

export default SlotGameSceneUI;