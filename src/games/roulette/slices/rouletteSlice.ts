import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";

interface InitialState {
  activeNumber: number;
  currentBet: number;
}

const initialState: InitialState = {
  activeNumber: 0,
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
  }
});

export const {
  setActiveNumber,
  setCurrentBet,
} = rouletteSlice.actions;

export const selectActiveNumber = (state: RootState) => state.roulette.activeNumber;
export const selectCurrentBet = (state: RootState) => state.roulette.currentBet;

export default rouletteSlice.reducer;