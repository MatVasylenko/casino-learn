import { Sprite } from '@pixi/react';
import React, { FC } from 'react';
import { IHummerPit } from '../../../slices/models/Pit';
import pitEmpty from '../../../../../assets/hummer/mole-001.svg';

interface IHummerPitPXProps extends IHummerPit {

};

const HummerPitPX:FC<IHummerPitPXProps> = ({
  position,
}) => {
  return (
    <Sprite
      position={position}
      image={pitEmpty}
      anchor={0.5}
    />
  )
};

export default HummerPitPX;