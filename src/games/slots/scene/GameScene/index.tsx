import React, { FC } from 'react';
import SlotGameSceneUI from './GameSceneUI';
import { Stage } from '../../../../app/config/contextBridge';
import RowsPX from '../../pixi/rows/RowsPX';
import SlotLifecycleProvider from './SlotLifecycleProvider';

interface ISlotGameSceneProps {

};

const [width, height] = [1150, 500]

const SlotGameScene: FC<ISlotGameSceneProps> = ({ }) => {
  return (
    <div className="flex justify-center items-center">
      <SlotLifecycleProvider>
        <SlotGameSceneUI>
          <Stage
            width={width}
            height={height}
            options={{
              background: 'green'
            }}
          >
            <RowsPX />
          </Stage>
        </SlotGameSceneUI>
      </SlotLifecycleProvider>
    </div>
  )
};

export default SlotGameScene;