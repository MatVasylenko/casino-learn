import React, { FC } from 'react';
import { useAppSelector } from '../../../../app/store/hook';
import { selectActiveNumber, selectCurrentBet } from '../../slices/rouletteSlice';
import { selectBalance } from '../../../../entities/wallet/slices/walletSlice';
import ScoreWindow from '../../shared/scoreWindow';

interface IInfoPanelProps {

};

export interface IScoreItem {
  id: 'balance' | 'winBet' | 'currentBet' | 'activeNumber';
  title: string;
  icon: string;
}

const ITEMS: IScoreItem[] = [
  {
    id: 'balance',
    title: 'Balance',
    icon: '',
  },
  {
    id: 'winBet',
    title: 'Win Bet',
    icon: '',
  },
  {
    id: 'currentBet',
    title: 'Bet',
    icon: '',
  },
  {
    id: 'activeNumber',
    title: 'Bet number',
    icon: '',
  },
]

const InfoPanel:FC<IInfoPanelProps> = ({}) => {
  const balance = useAppSelector(selectBalance);
  const activeNumber = useAppSelector(selectActiveNumber);
  const currentBet = useAppSelector(selectCurrentBet);
  const winBet = 100;

  return (
    <div className="flex justify-between px-10">
      {ITEMS.map((item) => (
        <div
          key={item.id}
        >
          <div>{item.title}</div>
          <div>
            {item.id === 'balance' && (
              <ScoreWindow
                icon="balance"
              >
                {balance}
              </ScoreWindow>
            )}
            {item.id === 'winBet' && (
              <ScoreWindow
                icon="winBet"
              >
                <div className="pr-1">
                  {winBet}
                </div>
              </ScoreWindow>
            )}
            {item.id === 'currentBet' && (
              <ScoreWindow
                icon="currentBet"
              >
                {currentBet}
              </ScoreWindow>
            )}
            {item.id === 'activeNumber' && (
              <ScoreWindow
                icon="activeNumber"
              >
                <div className="pr-6">
                  {activeNumber}
                </div>
              </ScoreWindow>
            )}
          </div>
        </div>
      ))}
    </div>
  )
};

export default InfoPanel;