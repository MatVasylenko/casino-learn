import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/store/hook';
import { selectActiveNumber, setCurrentBet } from '../../slices/rouletteSlice';
import bet50 from '../../../../assets/roulette/bet-50.png';
import bet100 from '../../../../assets/roulette/bet-100.png';
import bet200 from '../../../../assets/roulette/bet-200.png';
import bet400 from '../../../../assets/roulette/bet-400.png';
import bet800 from '../../../../assets/roulette/bet-800.png';

interface IBetsPanelProps {

};

const BETS = [
  {
    value: 50,
    image: bet50,
  },
  {
    value: 100,
    image: bet100,
  },
  {
    value: 200,
    image: bet200,
  },
  {
    value: 400,
    image: bet400,
  },
  {
    value: 800,
    image: bet800,
  }
]

const BetsPanel: FC<IBetsPanelProps> = ({ }) => {
  const dispatch = useAppDispatch();
  const pickBet = (value: number) => {
    dispatch(setCurrentBet(value))
  }

  return (
    <div>
      <div className="flex gap-4 items-center">
        {BETS.map(({ value, image }) => (
          <div
            onClick={() => pickBet(value)}
            onContextMenu={(e) => {
              e.preventDefault();
              pickBet(-value);
            }}
            key={value}
            className="cursor-pointer hover:scale-[1.05] transition-all"
          >
            <img src={image} />
          </div>
        ))}
      </div>
    </div>
  )
};

export default BetsPanel;