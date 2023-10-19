import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/store/hook';
import { selectRouletteSpinCurrentNumber, setRouletteSpinStartSpeed } from '../../slices/rouletteSpinSlice';
import { RouletteLifecycle, RouletteWinOrLose, selectRouletteLifecycle, selectRouletteWinOrLose, setRouletteLifecycle } from '../../slices/rouletteSlice';

interface IEventPanelProps {

};

const EventPanel:FC<IEventPanelProps> = ({}) => {
  const lifecycle = useAppSelector(selectRouletteLifecycle);
  const winOrLose = useAppSelector(selectRouletteWinOrLose);
  const currentNumber = useAppSelector(selectRouletteSpinCurrentNumber);
  const dispatch = useAppDispatch();

  const onStart = () => {
    dispatch(setRouletteSpinStartSpeed());
    dispatch(setRouletteLifecycle(RouletteLifecycle.PLAY))
  };

  return (
    <div>
      {lifecycle === RouletteLifecycle.READY_TO_START && (
        <button onClick={onStart}>start</button>
      )}
      {lifecycle === RouletteLifecycle.PLAY && (
        <div>Play</div>
      )}
      {lifecycle === RouletteLifecycle.FINISHED && (
        <div>Calcucating</div>
      )}
      {lifecycle === RouletteLifecycle.INFO && (
        <div className="flex gap-4">
          <div>
            {winOrLose === RouletteWinOrLose.WIN && 'Win!'}
            {winOrLose === RouletteWinOrLose.LOSE && 'Lose'}
          </div>
          <div>{currentNumber}</div>
        </div>
      )}
    </div>
  )
};

export default EventPanel;