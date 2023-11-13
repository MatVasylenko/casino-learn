import React, { FC } from 'react';
import SlotGameSceneUI from './GameSceneUI';
import { Stage } from '../../../../app/config/contextBridge';
import RowsPX from '../../pixi/rows/RowsPX';
import SlotLifecycleProvider from './SlotLifecycleProvider';
import BalanceProvider from './BalanceProvider';
import styles from './gameScene.module.css';
import { twMerge } from 'tailwind-merge';
import BodyPX from '../../pixi/body/BodyPX';

interface ISlotGameSceneProps {

};

const [width, height] = [1150, 500]

const SlotGameScene: FC<ISlotGameSceneProps> = ({ }) => {
  return (
    <div style={{
      width, height
    }} className={twMerge("flex justify-center items-center", styles.table)}>
      <SlotLifecycleProvider>
        <BalanceProvider>
          <SlotGameSceneUI>
            <Stage
              width={width}
              height={height}
              options={{
                background: 'rgba(46, 29, 51, 0.96)'
              }}
            >
              <BodyPX />
              <RowsPX />
            </Stage>
          </SlotGameSceneUI>
        </BalanceProvider>
      </SlotLifecycleProvider>
    </div>
  )
};

export default SlotGameScene;