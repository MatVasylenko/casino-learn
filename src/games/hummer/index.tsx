import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/store/hook';
import { HummerScenes, selectHummerScene } from './slices/hummerCoreSlice';
import HummerMenuScene from './scenes/menu/HummerMenuScene';
import HummerGameScene from './scenes/game/HummerGameScene';

interface IHummerCoreProps {

};

const HummerCore:FC<IHummerCoreProps> = ({}) => {
  const scene = useAppSelector(selectHummerScene);

  switch (scene){
    case HummerScenes.MENU:
      return <HummerMenuScene />;

    case HummerScenes.GAME:
      return <HummerGameScene />

    default:
      return <div>Something wrong...</div>
  }
};

export default HummerCore;