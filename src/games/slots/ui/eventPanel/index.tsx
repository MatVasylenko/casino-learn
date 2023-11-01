import React, { FC } from 'react';

interface ISlotEventPanelProps {

};

const SlotEventPanel:FC<ISlotEventPanelProps> = ({}) => {
  const onStart = () => {

  }
  return (
    <div>
      <button onClick={onStart}>GO</button>
    </div>
  )
};

export default SlotEventPanel;