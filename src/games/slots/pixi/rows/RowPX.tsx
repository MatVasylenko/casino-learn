import { Container, Sprite, useTick } from '@pixi/react';
import React, { FC } from 'react';
import { TSlotRow } from './utils';
import { useState } from 'react';

interface IRowPXProps {
  rowID: number;
  activeItemID: number;
  slotRow: TSlotRow[];
};

const ITEM_HEIGHT = 100;
const SPEED = 0;

const RowPX: FC<IRowPXProps> = ({
  slotRow,
  rowID,
}) => {
  const FULL_HEIGHT_ROW = slotRow.length * ITEM_HEIGHT
  const [position, setPosition] = useState(-FULL_HEIGHT_ROW)
  useTick((delta) => {
    if (position >= FULL_HEIGHT_ROW) {
      setPosition(-FULL_HEIGHT_ROW)
    } else {
      setPosition(position + (SPEED * delta))
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
            // anchor={0.5}
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
            // anchor={0.5}
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
            // anchor={0.5}
            scale={0.5}
          />
        ))}
      </Container>
      {/* END Bottom fake row */}
    </Container>
  )
};

export default RowPX;