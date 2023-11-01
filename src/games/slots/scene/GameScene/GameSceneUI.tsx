import React, { FC, ReactNode } from 'react';
import SlotBetsPanel from '../../ui/betsPanel';
import SlotInfoPanel from '../../ui/infoPanel';
import SlotEventPanel from '../../ui/eventPanel';

interface ISlotGameSceneUIProps {
  children: ReactNode
};

const SlotGameSceneUI:FC<ISlotGameSceneUIProps> = ({
  children
}) => {
  return (
    <div className="relative">
      <div className="absolute left-[15%] top-[50%] translate-y-[-50%]">
        <SlotBetsPanel />
      </div>
      <div className="absolute right-[15%] top-[30%]">
        <SlotInfoPanel />
      </div>
      <div className="absolute right-[15%] top-[50%]">
        <SlotEventPanel />
      </div>
      {children}
    </div>
  )
};

export default SlotGameSceneUI;