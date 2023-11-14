import React, { FC } from 'react';
import { Stage } from '../../../../app/config/contextBridge';
import HummerBgPX from '../../pixi/game/bg/HummerBgPX';
import PitsPX from '../../pixi/game/pits/PitsPX';

interface IHummerGameSceneProps {

};

const [width, height] = [550, 700];

const HummerGameScene:FC<IHummerGameSceneProps> = ({}) => {
  return (
    <div>
      <Stage width={width} height={height} options={{
        backgroundColor: 'green'
      }}>
        <HummerBgPX />
        <PitsPX />
      </Stage>
    </div>
  )
};

export default HummerGameScene;