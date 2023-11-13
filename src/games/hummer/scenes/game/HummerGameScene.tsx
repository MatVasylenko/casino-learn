import React, { FC } from 'react';
import { Stage } from '../../../../app/config/contextBridge';

interface IHummerGameSceneProps {

};

const [width, height] = [500, 700];

const HummerGameScene:FC<IHummerGameSceneProps> = ({}) => {
  return (
    <div>
      <Stage width={width} height={height} options={{
        backgroundColor: 'green'
      }}>

      </Stage>
    </div>
  )
};

export default HummerGameScene;