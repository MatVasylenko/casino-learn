import { Container, Sprite } from '@pixi/react';
import React, { FC, useEffect } from 'react';
import bg from '../../../../../assets/hummer/bg.jpg';
import { HummerPitState, MOCK_PITS } from '../../../slices/models/Pit';
import HummerPitPX from './PitPX';
import * as PIXI from 'pixi.js';

import spritesheet from '../../../../../assets/hummer/sprite-mole.json';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../app/store/hook';
import { selectHummerPits, setHummerPits } from '../../../slices/hummerCoreSlice';

interface IPitsPXProps {

};

const PitsPX:FC<IPitsPXProps> = ({}) => {
  const [frames, setFrames] = useState<PIXI.Texture<PIXI.Resource>[]>();
  const pits = useAppSelector(selectHummerPits);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const algoritmInternal = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * 9);
      dispatch(setHummerPits({
        currentIndex: randomIndex,
        state: HummerPitState.PROCESSING
      }))
    }, 2000);

    return () => clearInterval(algoritmInternal);
  }, []);

  useEffect(() => {
    PIXI.Assets.load(JSON.stringify(spritesheet)).then(() => {
      const names = ['mole-001.svg', 'mole-002.svg', 'mole-003.svg'];
      const genFrames = names.map((name) => {
        return PIXI.Texture.from(name);
      });
      setFrames(genFrames);
    })
  }, [])
  return (
    <Container
      x={25}
      y={50}
    >
      {pits.map((pit, idx) => (
        <HummerPitPX
          key={`pit${idx}`}
          frames={frames}
          {...pit}
        />
      ))}
    </Container>
  )
};

export default PitsPX;