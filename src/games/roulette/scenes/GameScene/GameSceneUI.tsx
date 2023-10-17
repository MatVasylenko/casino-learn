import React, { FC, ReactNode } from 'react';
import RouletteTable from '../../ui/RouletteTable/RouletteTable';
import BetsPanel from '../../ui/BetsPanel/BetsPanel';
import InfoPanel from '../../ui/InfoPanel/InfoPanel';
import EventPanel from '../../ui/EventPanel/EventPanel';

interface IGameSceneUIProps {
  children: ReactNode;
};

const GameSceneUI:FC<IGameSceneUIProps> = ({
  children,
}) => {
  return (
    <div className="relative">
      <div className="absolute left-0 right-0 top-[5%] text-white">
        <InfoPanel />
      </div>
      <div className="absolute left-[65%] top-[30%] text-white">
        <EventPanel />
      </div>
      <div className="absolute bottom-[15%] right-[30%]">
        <BetsPanel />
      </div>
      <div className="absolute right-[5%] top-[40%] text-white">
        <RouletteTable />
      </div>
      {children}
    </div>
  )
};

export default GameSceneUI;