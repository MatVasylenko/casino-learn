import React, { FC, useEffect } from 'react';
import RouletteSpinPX from './RouletteSpinPX';
import { useAppDispatch, useAppSelector } from '../../../../app/store/hook';
import { selectRouletteSpinRotationInProgress, selectRouletteSpinSpeed, setRouletteSpinSpeed } from '../../slices/rouletteSpinSlice';

interface IRouletteSpinControllerProps {

};

const RouletteSpinController:FC<IRouletteSpinControllerProps> = ({}) => {
  const speed = useAppSelector(selectRouletteSpinSpeed);
  const rotationInProgress = useAppSelector(selectRouletteSpinRotationInProgress);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(rotationInProgress, 'rotationInProgress')
    if (rotationInProgress) {
      const speedInterval = setInterval(() => {
        if (speed < 0.01) {
          dispatch(setRouletteSpinSpeed(0))
          clearInterval(speedInterval)
        } else {
          dispatch(setRouletteSpinSpeed(null))
        }
      }, 200);
    }
  }, [rotationInProgress])
  return (
    <RouletteSpinPX />
  )
};

export default RouletteSpinController;