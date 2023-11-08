import React, { FC } from 'react';
import { useAppSelector } from '../../../../app/store/hook';
import { SlotLifecycle, selectSlotLifecycle } from '../../slices/slotSlice';

interface ISlotEventPanelProps {

};

const SlotEventPanel:FC<ISlotEventPanelProps> = ({}) => {
  const lifecycle = useAppSelector(selectSlotLifecycle);
  const onStart = () => {

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