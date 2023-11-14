export enum HummerPitState {
  EMPTY = 'empty',
  START = 'start',
  PROCESSING = 'processing',
  READY = 'ready',
}

export interface IHummerPit {
  state: `${HummerPitState}`;
  position: {
    x: number;
    y: number;
  };
}

export const MOCK_PITS: IHummerPit[] = [
  {
    state: HummerPitState.EMPTY,
    position: {
      x: 80,
      y: 250,
    }
  },
  {
    state: HummerPitState.EMPTY,
    position: {
      x: 250,
      y: 250,
    },
  },
  {
    state: HummerPitState.EMPTY,
    position: {
      x: 420,
      y: 250,
    },
  },
  {
    state: HummerPitState.EMPTY,
    position: {
      x: 80,
      y: 380,
    },
  },
  {
    state: HummerPitState.EMPTY,
    position: {
      x: 250,
      y: 380,
    },
  },
  {
    state: HummerPitState.EMPTY,
    position: {
      x: 420,
      y: 380,
    },
  },
  {
    state: HummerPitState.EMPTY,
    position: {
      x: 80,
      y: 510,
    },
  },
  {
    state: HummerPitState.EMPTY,
    position: {
      x: 250,
      y: 510,
    },
  },
  {
    state: HummerPitState.EMPTY,
    position: {
      x: 420,
      y: 510,
    },
  },
]