import { Sprite } from '@pixi/react';
import React, { FC } from 'react';
import { HummerPitState, IHummerPit } from '../../../slices/models/Pit';
import pitEmpty from '../../../../../assets/hummer/item.svg';
import * as PIXI from 'pixi.js';
import HummerAnimatePitPX from './AnimatePitPX';

interface IHummerPitPXProps extends IHummerPit {
  frames?: PIXI.Texture<PIXI.Resource>[];
  idx: number;
}

const HummerPitPX: FC<IHummerPitPXProps> = ({
  position,
  state,
  frames,
  idx,
}) => {
  return (
    <>
      {state === HummerPitState.EMPTY && (
        <Sprite
          position={position}
          image={pitEmpty}
          anchor={{
            x: 0.5,
            y: 1,
          }}
        />
      )}
      {state === HummerPitState.PROCESSING && (
        <HummerAnimatePitPX
          position={position}
          frames={frames}
          idx={idx}
        />
      )}
    </>
  )
};

export default HummerPitPX;