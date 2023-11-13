import { Container, Sprite, useTick } from '@pixi/react';
import React, { FC } from 'react';
import { TSlotRow } from './utils';
import { useState } from 'react';
import { useAppSelector } from '../../../../app/store/hook';
import { SlotLifecycle, selectSlotLifecycle } from '../../slices/slotSlice';

interface IRowPXProps {
  rowID: number;
  activeItemID: number;
  slotRow: TSlotRow[];
};

const ITEM_HEIGHT = 100;
const SPEED = 40;
const DELTA_ALIGN_CENTER = 200;

const RowPX: FC<IRowPXProps> = ({
  slotRow,
  activeItemID,
  rowID,
}) => {
  const lifecylce = useAppSelector(selectSlotLifecycle);
  const isStopping = lifecylce === SlotLifecycle.STOPPING;
  const isPlaying = lifecylce === SlotLifecycle.PLAY;

  const FULL_HEIGHT_ROW = slotRow.length * ITEM_HEIGHT
  const currentIndexRowItem = slotRow.findIndex((rowItem) => rowItem.id === activeItemID);
  const currentPosition = -((currentIndexRowItem * ITEM_HEIGHT) - DELTA_ALIGN_CENTER);
  const startPosition = currentPosition - FULL_HEIGHT_ROW;
  const speed = (isStopping || isPlaying) ? SPEED : 0;

  const [position, setPosition] = useState(-FULL_HEIGHT_ROW);
  const [fixPosition, setFixPosition] = useState(false);

  useTick((delta) => {
    if (position >= FULL_HEIGHT_ROW) {
      setPosition(-FULL_HEIGHT_ROW)
    } else {
      setPosition(position + (speed * delta))
    }

    if (isStopping && !fixPosition) {
      setPosition(startPosition);
      setFixPosition(true);
    }

    if (isStopping && fixPosition){
      const koefC = currentPosition - position;
      if (koefC > 0) {
        setPosition(position + (speed * delta))
      } else {
        setPosition(currentPosition);
      }
    }
  })
  return (
    <Container
      x={(rowID - 1) * 120}
      y={position}
    >
      {/* Fake top row */}
      <Container
        y={-(FULL_HEIGHT_ROW)}
      >
        {slotRow.map((row, idx) => (
          <Sprite
            key={row.id}
            image={row.image}
            x={0}
            y={idx * ITEM_HEIGHT}
            anchor={0.5}
            scale={0.5}
          />
        ))}
      </Container>
      {/* END Fake top row */}

      <Container>
        {slotRow.map((row, idx) => (
          <Sprite
            key={row.id}
            image={row.image}
            x={0}
            y={idx * ITEM_HEIGHT}
            anchor={0.5}
            scale={0.5}
          />
        ))}
      </Container>

      {/* Bottom fake row */}
      <Container
        y={FULL_HEIGHT_ROW}
      >
        {slotRow.map((row, idx) => (
          <Sprite
            key={row.id}
            image={row.image}
            x={0}
            y={idx * ITEM_HEIGHT}
            anchor={0.5}
            scale={0.5}
          />
        ))}
      </Container>
      {/* END Bottom fake row */}
    </Container>
  )
};

export default RowPX;