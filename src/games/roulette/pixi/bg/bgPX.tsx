import { Container, Sprite } from '@pixi/react';
import  { FC } from 'react';
import bg from '../../../../assets/roulette/bg1.jpg'

interface IBgPXProps {

};

const BgPX:FC<IBgPXProps> = ({}) => {
  return (
    <Container>
      <Sprite
        x={0}
        y={0}
        anchor={{
          x: 0,
          y: 0
        }}
        // rotation={rotationInternal}
        image={bg}
        scale={0.8}
      />
    </Container>
  )
};

export default BgPX;