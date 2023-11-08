import React, { FC, useMemo } from 'react';
import RowPX from './RowPX';
import { SLOT_ROW, TSlotRow } from './utils';
import { Container } from '@pixi/react';
import { useAppSelector } from '../../../../app/store/hook';
import { selectSlotRows } from '../../slices/slotSlice';

interface IRowsPXProps {

};

const generateRandomRow = (slotRow: TSlotRow[]) => {
  const clone = [...slotRow];
  clone.sort(() => Math.random() - 0.5);

  return clone;
}

const RowsPX: FC<IRowsPXProps> = ({ }) => {
  const rows = useAppSelector(selectSlotRows);

  const firstSlotRow = useMemo(() => generateRandomRow(SLOT_ROW), []);
  const secondSlotRow = useMemo(() => generateRandomRow(SLOT_ROW), []);
  const thirdSlotRow = useMemo(() => generateRandomRow(SLOT_ROW), []);

  const slotRows = [firstSlotRow, secondSlotRow, thirdSlotRow];
  return (
    <Container
      x={395}
      y={0}
    >
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