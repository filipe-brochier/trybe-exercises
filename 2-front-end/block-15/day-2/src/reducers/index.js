import { CHANGE_SIGNAL, MOVE_CAR } from "../actions/actionCreators";

const initialState = {
  signal: {
    color: 'red',
  },
}

const secondInitialState = {
  cars: {
    red: false,
    blue: false,
    yellow: false,
  },
};

export function signalReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SIGNAL:
      return { ...state, signal: { ...state.signal, color: action.payload } };
    default:
      return state;
  }
}

export function carReducer(state = secondInitialState, action) {
  switch (action.type) {
    case MOVE_CAR:
      return { ...state, cars: { ...state.cars, [action.car]: action.side } };
    default:
      return state;
  }
}
