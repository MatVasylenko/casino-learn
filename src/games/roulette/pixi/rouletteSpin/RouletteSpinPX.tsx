import { FC, useState } from 'react';
import { Container, Sprite, useTick } from '@pixi/react';
import externalCircle from '../../../../assets/roulette/external-circle.png';
import mediumCircle from '../../../../assets/roulette/medium-circle.png';
import internalCircle from '../../../../assets/roulette/internal-circle.png';
import arrow from '../../../../assets/roulette/arrow.png';
import wheel from '../../../../assets/roulette/wheel.png';
import { useAppDispatch, useAppSelector } from '../../../../app/store/hook';
import { selectRouletteSpinRotationInProgress, selectRouletteSpinSpeed, setRouletteSpinDegreesRotation, setRouletteSpinSpeed } from '../../slices/rouletteSpinSlice';
import { radianToDegrees } from '../../../../shared/lib/degrees/radianToDegrees';
import { RouletteLifecycle, setRouletteLifecycle } from '../../slices/rouletteSlice';

interface IRouletteSpinPXProps {

};

const POSITION_SPIN = {
  x: 200,
  y: 300,
}

const POSITION_ARROW = {
  x: 200,
  y: 170,
  rotation: -0.45
}

const RouletteSpinPX: FC<IRouletteSpinPXProps> = ({ }) => {
  const speed = useAppSelector(selectRouletteSpinSpeed);
  const dispatch = useAppDispatch();
  const rotationInProgress = useAppSelector(selectRouletteSpinRotationInProgress)
  const [rotationMedium, setRotationMedium] = useState(0);
  const [rotationWheel, setRotationWheel] = useState(0);
  useTick((delta) => {
    if (rotationInProgress){
      const rotation = delta * speed;
      setRotationMedium((prev) => prev + rotation);
      setRotationWheel((prev) => prev - rotation);
      if (speed < 0.005) {
        // console.log(rotationMedium % Math.PI * 2)
        dispatch(setRouletteSpinSpeed(0))
        dispatch(setRouletteSpinDegreesRotation(
          radianToDegrees(rotationMedium % (Math.PI * 2))
        ))
        dispatch(setRouletteLifecycle(RouletteLifecycle.FINISHED))
      } else {
        dispatch(setRouletteSpinSpeed(null))
      }
    }
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