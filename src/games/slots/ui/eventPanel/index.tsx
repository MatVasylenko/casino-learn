import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/store/hook';
import { SlotLifecycle, selectSlotLifecycle, startSlot } from '../../slices/slotSlice';

interface ISlotEventPanelProps {

};

const SlotEventPanel:FC<ISlotEventPanelProps> = ({}) => {
  const lifecycle = useAppSelector(selectSlotLifecycle);
  const dispatch = useAppDispatch();
  const onStart = () => {
    dispatch(startSlot())
  }
  return (
    <div>
      {lifecycle === SlotLifecycle.READY_TO_START && (
        <button onClick={onStart}>GO</button>
      )}
    </div>
  )
};

export default SlotEventPanel;