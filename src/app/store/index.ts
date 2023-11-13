import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../../entities/user/slices/userSlice'
import { userApi } from '../../entities/user/api/userApi'
import rouletteSlice from '../../games/roulette/slices/rouletteSlice'
import walletSlice from '../../entities/wallet/slices/walletSlice'
import rouletteSpinSlice from '../../games/roulette/slices/rouletteSpinSlice'
import slotSlice from '../../games/slots/slices/slotSlice'
import hummerCoreSlice from '../../games/hummer/slices/hummerCoreSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    wallet: walletSlice,
    roulette: rouletteSlice,
    rouletteSpin: rouletteSpinSlice,
    slot: slotSlice,
    hummerCoreSlice: hummerCoreSlice,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch