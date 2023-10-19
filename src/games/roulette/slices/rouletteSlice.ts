import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";

export enum RouletteLifecycle {
  READY_TO_START = 'start',
  PLAY = 'play',
  FINISHED = 'finished',
  INFO = 'info',
}

export enum RouletteWinOrLose {
  WIN = 'win',
  LOSE = 'lose',
}

interface InitialState {
  readonly winBet: number;
  lifecycle: `${RouletteLifecycle}`;
  winOrLose: `${RouletteWinOrLose}` | null;
  activeNumber: number | null;
  currentBet: number;
}

const initialState: InitialState = {
  winBet: 36,
  lifecycle: RouletteLifecycle.READY_TO_START,
  winOrLose: null,
  activeNumber: null,
  currentBet: 0,
}

const rouletteSlice = createSlice({
  initialState,
  name: 'roulette',
  reducers: {
    setActiveNumber: (state, action: PayloadAction<number>) => {
      state.activeNumber = action.payload;
    },
    setCurrentBet: (state, action: PayloadAction<number>) => {
      if ((state.currentBet + action.payload) < 0){
        state.currentBet = 0;
      } else {
        state.currentBet = state.currentBet + action.payload;
      }
    },
    setRouletteLifecycle: (state, action: PayloadAction<RouletteLifecycle>) => {
      state.lifecycle = action.payload;
    },
    setRouletteWinOrLose: (state, action: PayloadAction<RouletteWinOrLose | null>) => {
      state.winOrLose = action.payload;
    },
    clearRoulette: (state) => {
      state.activeNumber = null;
      state.currentBet = 0;
    }
  }
});

export const {
  setActiveNumber,
  setCurrentBet,
  setRouletteLifecycle,
  setRouletteWinOrLose,
  clearRoulette,
} = rouletteSlice.actions;

export const selectActiveNumber = (state: RootState) => state.roulette.activeNumber;
export const selectCurrentBet = (state: RootState) => state.roulette.currentBet;
export const selectRouletteLifecycle = (state: RootState) => state.roulette.lifecycle;
export const selectRouletteWinBet = (state: RootState) => state.roulette.winBet;
export const selectRouletteWinOrLose = (state: RootState) => state.roulette.winOrLose;

export default rouletteSlice.reducer;