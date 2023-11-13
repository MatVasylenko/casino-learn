import React, { FC, useMemo } from 'react';
import RowPX from './RowPX';
import { SLOT_ROW, TSlotRow } from './utils';
import { Container, Graphics } from '@pixi/react';
import { useAppSelector } from '../../../../app/store/hook';
import { selectSlotRows } from '../../slices/slotSlice';
import { useRef, useEffect } from 'react';
import { useState } from 'react';

interface IRowsPXProps {

};

const generateRandomRow = (slotRow: TSlotRow[]) => {
  const clone = [...slotRow];
  clone.sort(() => Math.random() - 0.5);

  return clone;
}

const RowsPX: FC<IRowsPXProps> = ({ }) => {
  const [loading, setLoading] = useState(false);
  const rows = useAppSelector(selectSlotRows);

  const firstSlotRow = useMemo(() => generateRandomRow(SLOT_ROW), []);
  const secondSlotRow = useMemo(() => generateRandomRow(SLOT_ROW), []);
  const thirdSlotRow = useMemo(() => generateRandomRow(SLOT_ROW), []);

  const slotRows = [firstSlotRow, secondSlotRow, thirdSlotRow];

  const mask = useRef(null);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <Container
      x={450}
      y={50}
      mask={mask?.current}
    >
      <Graphics
        draw={g => {
          g.beginFill(0x000000);
          g.drawRect(-100, 50, 400, 300);
          g.endFill();
        }}
        ref={mask}
      />
      {rows.map((row, idx) => (
        <RowPX
          key={row.id}
          rowID={row.id}
          activeItemID={row.activeItemID}
          slotRow={slotRows[idx]}
        />
      ))}
    </Container>
  )
};

export default RowsPX;