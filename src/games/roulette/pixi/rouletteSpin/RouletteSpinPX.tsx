import React, { FC, useState } from 'react';
import { Container, Sprite, useTick } from '@pixi/react';
import externalCircle from '../../../../assets/roulette/external-circle.png';
import mediumCircle from '../../../../assets/roulette/medium-circle.png';
import internalCircle from '../../../../assets/roulette/internal-circle.png';
import arrow from '../../../../assets/roulette/arrow.png';
import wheel from '../../../../assets/roulette/wheel.png';
import { useAppSelector } from '../../../../app/store/hook';
import { selectRouletteSpinSpeed } from '../../slices/rouletteSpinSlice';

interface IRouletteSpinPXProps {

};

const POSITION_SPIN = {
  x: 200,
  y: 300,
}

const POSITION_ARROW = {
  x: 290,
  y: 220,
  rotation: 0.4
}

const RouletteSpinPX:FC<IRouletteSpinPXProps> = ({}) => {
  const speed = useAppSelector(selectRouletteSpinSpeed);
  const [rotationMedium, setRotationMedium] = useState(0);
  const [rotationWheel, setRotationWheel] = useState(0);
  useTick((delta) => {
    const rotation = delta * speed;
    setRotationMedium((prev) => prev + rotation);
    setRotationWheel((prev) => prev - rotation);
  })
  return (
    <Container>
      <Sprite
        image={externalCircle}
        x={POSITION_SPIN.x}
        y={POSITION_SPIN.y}
        anchor={0.5}
      />
      <Sprite
        image={mediumCircle}
        x={POSITION_SPIN.x}
        y={POSITION_SPIN.y}
        rotation={rotationMedium}
        anchor={0.5}
      />
      <Sprite
        image={internalCircle}
        x={POSITION_SPIN.x}
        y={POSITION_SPIN.y}
        anchor={0.5}
      />
      <Sprite
        image={wheel}
        x={POSITION_SPIN.x}
        y={POSITION_SPIN.y}
        rotation={rotationWheel}
        anchor={0.5}
      />
      <Sprite
        image={arrow}
        x={POSITION_ARROW.x}
        y={POSITION_ARROW.y}
        rotation={POSITION_ARROW.rotation}
        anchor={0.5}
      />
    </Container>
  )
};

export default RouletteSpinPX;