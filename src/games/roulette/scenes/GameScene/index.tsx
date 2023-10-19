import { FC } from 'react';
import RouletteSpinPX from '../../pixi/rouletteSpin/RouletteSpinPX';
import GameSceneUI from './GameSceneUI';
import { Stage } from '../../../../app/config/contextBridge';
import GameSceneActionsProvider from './GameSceneActionsProvider';

interface IRouletteGameSceneProps {

};

const [width, height] = [1100, 500];

const RouletteGameScene: FC<IRouletteGameSceneProps> = ({ }) => {
  return (
    <div className='flex flex-col items-center'>
      <div>Titlt game</div>
      <GameSceneActionsProvider>
        <GameSceneUI>
          <Stage
            width={width}
            height={height}
            options={{
              background: 'green'
            }}
          >
            <RouletteSpinPX />
          </Stage>
        </GameSceneUI>
      </GameSceneActionsProvider>
    </div>
  )
};

export default RouletteGameScene;