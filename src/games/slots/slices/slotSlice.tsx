import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";

export enum SlotLifecycle {
  READY_TO_START = 'start',
  PLAY = 'play',
  STOPPING = 'stopping',
  STOP = 'stop',
  INFO = 'info',
}

export interface ISlotRow {
  id: number
  activeItemID: number;
}

export enum SlotWinOrLose {
  WIN = 'win',
  LOSE = 'lose'
}

interface ISlot {
  lifecycle: `${SlotLifecycle}`;
  rows: ISlotRow[];
  winOrLose: `${SlotWinOrLose}` | null;
}

const initialState: ISlot = {
  lifecycle: SlotLifecycle.READY_TO_START,
  rows: [
    {
      id: 1,
      activeItemID: 7
    },
    {
      id: 2,
      activeItemID: 7
    },
    {
      id: 3,
      activeItemID: 7
    },
  ],
  winOrLose: null,
}

const slotSlice = createSlice({
  initialState,
  name: 'slot',
  reducers: {
    setSlotLifecycle: (state, action: PayloadAction<SlotLifecycle>) => {
      state.lifecycle = action.payload
    },
    startSlot: (state) => {
      state.lifecycle = SlotLifecycle.PLAY;
      state.rows = state.rows.map((row) => ({
        ...row,
        activeItemID: Math.ceil(Math.random() * 12)
      }));
      const arrayActiveItemsID = state.rows.map(row => row.activeItemID);
      const firstItem = arrayActiveItemsID[0];
      console.log(state.rows)
      const win = arrayActiveItemsID.every((elem) => elem === firstItem);
      state.winOrLose = win ? SlotWinOrLose.WIN : SlotWinOrLose.LOSE
    }
  }
});

export const {
  setSlotLifecycle,
  startSlot,
} = slotSlice.actions;

export const selectSlotLifecycle = (state: RootState) => state.slot.lifecycle;
export const selectSlotRows = (state: RootState) => state.slot.rows;

export default slotSlice.reducer;