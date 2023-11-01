import React, { FC } from 'react';
import SlotGameScene from './scene/GameScene';

interface ICoreGameSlotsProps {

};

const CoreGameSlots:FC<ICoreGameSlotsProps> = ({}) => {
  return (
    <div>
      <SlotGameScene />
    </div>
  )
};

export default CoreGameSlots;