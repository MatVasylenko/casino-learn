import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import { IHummerPit, MOCK_PITS } from "./models/Pit";

export enum HummerScenes {
  MENU = 'menu',
  GAME = 'game'
}

interface IHummer {
  scene: `${HummerScenes}`;
  pits: IHummerPit[];
}

const initialState: IHummer = {
  scene: HummerScenes.MENU,
  pits: MOCK_PITS,
}

const hummerCoreSlice = createSlice({
  initialState,
  name: 'hummerCoreSlice',
  reducers: {
    setHummerScene: (state, action: PayloadAction<HummerScenes>) => {
      state.scene = action.payload;
    },
    setHummerPits: (state, action: PayloadAction<{
      currentIndex: number;
      state: IHummerPit['state'];
    }>) => {
      const newPitsState = state.pits.map((pit, pitIndex) => {
        if (action.payload.currentIndex === pitIndex) {
          return ({
            ...pit,
            state: action.payload.state,
          });
        } else {
          return pit;
        }
      });

      state.pits = [...newPitsState];
    }
  }
});

export const {
  setHummerScene,
  setHummerPits,
} = hummerCoreSlice.actions;

export const selectHummerScene = (state:RootState) => state.hummerCoreSlice.scene;
export const selectHummerPits = (state:RootState) => state.hummerCoreSlice.pits;

export default hummerCoreSlice.reducer;