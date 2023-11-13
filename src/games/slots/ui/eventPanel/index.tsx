import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/store/hook';
import { SlotLifecycle, selectSlotLifecycle, selectSlotWinOrLose, startSlot } from '../../slices/slotSlice';
import winImage from '../../../../assets/slot/info/win.svg';
import loseImage from '../../../../assets/slot/info/lose.png';
import spinText from '../../../../assets/slot/info/spin.png';
import buttonImage from '../../../../assets/slot/info/button.png';
import handleImage from '../../../../assets/slot/info/handle.png';
import { twMerge } from 'tailwind-merge';

interface ISlotEventPanelProps {

};

const SlotEventPanel: FC<ISlotEventPanelProps> = ({ }) => {
  const lifecycle = useAppSelector(selectSlotLifecycle);
  const winOrLose = useAppSelector(selectSlotWinOrLose);

  const isReadyToStart = lifecycle === SlotLifecycle.READY_TO_START;
  const dispatch = useAppDispatch();
  const onStart = () => {
    dispatch(startSlot())
  }
  return (
    <div className="flex flex-col justify-between h-[300px] w-[150px]">
      <div>
        {lifecycle === SlotLifecycle.INFO && (
          <div>
            {winOrLose === 'win' && (
              <img src={winImage} />
            )}
            {winOrLose !== 'win' && (
              <img src={loseImage} />
            )}
          </div>
        )}
      </div>
      <div onClick={onStart} className={twMerge(
        "relative",
        isReadyToStart && 'cursor-pointer'
      )}>
        {isReadyToStart && (
          <div className="absolute left-[45%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-20">
            <img src={spinText} />
          </div>
        )}
        <img src={buttonImage} className="z-10 relative" />
        <img className="absolute right-[85%] bottom-0" src={handleImage} />
      </div>
    </div>
  )
};

export default SlotEventPanel;