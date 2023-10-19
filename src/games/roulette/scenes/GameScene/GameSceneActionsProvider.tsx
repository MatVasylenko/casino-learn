import React, { FC, ReactNode, useEffect } from 'react';
import { RouletteLifecycle, RouletteWinOrLose, clearRoulette, selectActiveNumber, selectCurrentBet, selectRouletteLifecycle, selectRouletteWinBet, setRouletteLifecycle, setRouletteWinOrLose } from '../../slices/rouletteSlice';
import { useAppDispatch, useAppSelector } from '../../../../app/store/hook';
import { clearRouletteSpin, selectRouletteSpinCurrentNumber } from '../../slices/rouletteSpinSlice';
import { setBalance } from '../../../../entities/wallet/slices/walletSlice';

interface IGameSceneActionsProviderProps {
  children: ReactNode
};

const GameSceneActionsProvider:FC<IGameSceneActionsProviderProps> = ({
  children
}) => {
  const lifecycle = useAppSelector(selectRouletteLifecycle);
  const activeNumber = useAppSelector(selectActiveNumber);
  const currentNumber = useAppSelector(selectRouletteSpinCurrentNumber);
  const currentBet = useAppSelector(selectCurrentBet);
  const winBet = useAppSelector(selectRouletteWinBet);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (lifecycle === RouletteLifecycle.FINISHED) {
      if (activeNumber === currentNumber) {
        // Win case
        dispatch(setBalance(currentBet * winBet))
        dispatch(setRouletteWinOrLose(RouletteWinOrLose.WIN));
      } else {
        // Lose case
        dispatch(setBalance(-currentBet))
        dispatch(setRouletteWinOrLose(RouletteWinOrLose.LOSE));
      }
      dispatch(setRouletteLifecycle(RouletteLifecycle.INFO));
    }
  }, [lifecycle, currentBet, winBet, dispatch, activeNumber, currentNumber]);

  useEffect(() => {
    if (lifecycle === RouletteLifecycle.INFO) {
      const lifeTimeout = setTimeout(() => {
        dispatch(setRouletteLifecycle(RouletteLifecycle.READY_TO_START));
        dispatch(clearRoulette());
        dispatch(clearRouletteSpin());
      }, 3000);

      // return clearTimeout(lifeTimeout);
    }

  }, [lifecycle, dispatch])

  return (
    <>
      {children}
    </>
  )
};

export default GameSceneActionsProvider;