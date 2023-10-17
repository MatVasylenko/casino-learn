import { FC } from 'react';
import { useAppDispatch } from '../../../../app/store/hook';
import { setRouletteSpinStartSpeed } from '../../slices/rouletteSpinSlice';

interface IEventPanelProps {

};

const EventPanel:FC<IEventPanelProps> = ({}) => {
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(setRouletteSpinStartSpeed());
  };

  return (
    <div>
      <button onClick={onClick}>start</button>
    </div>
  )
};

export default EventPanel;