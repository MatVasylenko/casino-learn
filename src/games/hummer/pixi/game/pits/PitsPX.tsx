import { Container, Sprite } from '@pixi/react';
import React, { FC } from 'react';
import bg from '../../../../../assets/hummer/bg.jpg';
import { MOCK_PITS } from '../../../slices/models/Pit';
import HummerPitPX from './PitPX';

interface IPitsPXProps {

};

const PitsPX:FC<IPitsPXProps> = ({}) => {
  return (
    <Container
      x={25}
    >
      {MOCK_PITS.map((pit, idx) => (
        <HummerPitPX
          key={`pit${idx}`}
          {...pit}
        />
      ))}
    </Container>
  )
};

export default PitsPX;