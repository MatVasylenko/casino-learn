import { Container, Sprite } from '@pixi/react';
import React, { FC } from 'react';
import bg from '../../../../../assets/hummer/bg.jpg';

interface IHummerBgPXProps {

};

const HummerBgPX:FC<IHummerBgPXProps> = ({}) => {
  return (
    <Container>
      <Sprite
        x={0}
        y={0}
        image={bg}
      />
    </Container>
  )
};

export default HummerBgPX;