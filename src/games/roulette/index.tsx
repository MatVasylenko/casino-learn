import React, { FC } from 'react';
import RouletteGameScene from './scenes/GameScene';

interface ICoreGameRouletteProps {

};

const CoreGameRoulette:FC<ICoreGameRouletteProps> = ({}) => {
  return (
    <div>
      <RouletteGameScene />
    </div>
  )
};

export default CoreGameRoulette;