import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IWallet } from './../model/Wallet';
import { RootState } from '../../../app/store';

const initialState: IWallet = {
  game_balance: 5000,
};

const walletSlice = createSlice({
  initialState,
  name: 'wallet',
  reducers: {
    setBalance: (state, action: PayloadAction<number>) => {
      console.log(action)

      state.game_balance = state.game_balance + action.payload;
    }
  }
});

export const {
  setBalance
} = walletSlice.actions;

export const selectBalance = (state: RootState) => state.wallet.game_balance;

export default walletSlice.reducer;