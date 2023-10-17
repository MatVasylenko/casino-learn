import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../../app/store';

interface UserState {
  name: string;
  nickname: string;
}

const initialState: UserState = {
  name: '',
  nickname: 'default nick'
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  },
})

// export const { increment, decrement, incrementByAmount } = userSlice.actions

export const selectUserNickname = (state: RootState) => state.user.nickname;

export default userSlice.reducer