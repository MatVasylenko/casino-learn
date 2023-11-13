import { FC } from 'react';
import { HummerMenuStartButton } from '../../ui/menu/startButton';

interface IHummerMenuSceneProps {

};

const HummerMenuScene:FC<IHummerMenuSceneProps> = ({}) => {
  return (
    <div>
      <div>
        <div>Balance</div>
        <div>Last score result&level</div>
      </div>
      <HummerMenuStartButton />
    </div>
  )
};

export default HummerMenuScene;