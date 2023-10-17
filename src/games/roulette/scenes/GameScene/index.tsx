import React, { FC } from 'react';
import RouletteSpinPX from '../../pixi/rouletteSpin/RouletteSpinPX';
import GameSceneUI from './GameSceneUI';
import { Stage } from '../../../../app/config/contextBridge';
import RouletteSpinController from '../../pixi/rouletteSpin/RouletteSpinController';

interface IRouletteGameSceneProps {

};

const [width, height] = [1100, 500];

const RouletteGameScene: FC<IRouletteGameSceneProps> = ({ }) => {
  return (
    <div className='flex flex-col items-center'>
      <div>Titlt game</div>
      <GameSceneUI>
        <Stage
          width={width}
          height={height}
          options={{
            background: 'green'
          }}
        >
          <RouletteSpinController />
        </Stage>
      </GameSceneUI>
    </div>
  )
};

export default RouletteGameScene;