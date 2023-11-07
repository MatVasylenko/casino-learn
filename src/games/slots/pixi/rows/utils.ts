import item1 from '../../../../assets/slot/row/item1.svg'
import item2 from '../../../../assets/slot/row/item2.svg'
import item3 from '../../../../assets/slot/row/item3.svg'
import item4 from '../../../../assets/slot/row/item4.svg'
import item5 from '../../../../assets/slot/row/item5.svg'
import item6 from '../../../../assets/slot/row/item6.svg'
import item7 from '../../../../assets/slot/row/item7.svg'
import item8 from '../../../../assets/slot/row/item8.svg'
import item9 from '../../../../assets/slot/row/item9.svg'
import item10 from '../../../../assets/slot/row/item10.svg'
import item11 from '../../../../assets/slot/row/item11.svg'
import item12 from '../../../../assets/slot/row/item12.svg'

export type TSlotRow = {
  id: number;
  image: string;
  title: string;
}

export const SLOT_ROW: TSlotRow[] = [
  {
    id: 1,
    image: item1,
    title: 'cherry',
  },
  {
    id: 2,
    image: item2,
    title: 'limon',
  },
  {
    id: 3,
    image: item3,
    title: 'orange',
  },
  {
    id: 4,
    image: item4,
    title: 'apple',
  },
  {
    id: 5,
    image: item5,
    title: 'grape',
  },
  {
    id: 6,
    image: item6,
    title: 'watermelon'
  },
  {
    id: 7,
    image: item7,
    title: 'seven'
  },
  {
    id: 8,
    image: item8,
    title: 'star'
  },
  {
    id: 9,
    image: item9,
    title: 'horseshoe'
  },
  {
    id: 10,
    image: item10,
    title: 'bell',
  },
  {
    id: 11,
    image: item11,
    title: 'brilliant',
  },
  {
    id: 12,
    image: item12,
    title: 'banan',
  },
]