import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";

export enum HummerScenes {
  MENU = 'menu',
  GAME = 'game'
}

interface IHummer {
  scene: `${HummerScenes}`;
}

const initialState: IHummer = {
  scene: HummerScenes.MENU,
}

const hummerCoreSlice = createSlice({
  initialState,
  name: 'hummerCoreSlice',
  reducers: {
    setHummerScene: (state, action: PayloadAction<HummerScenes>) => {
      state.scene = action.payload;
    }
  }
});

export const {
  setHummerScene
} = hummerCoreSlice.actions;

export const selectHummerScene = (state:RootState) => state.hummerCoreSlice.scene;

export default hummerCoreSlice.reducer;