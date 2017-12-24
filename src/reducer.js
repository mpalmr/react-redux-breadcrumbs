import { SET_TRAIL } from './action-types';


export const defaultState = {
  trail: [],
};


export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case SET_TRAIL:
      return {
        ...state,
        trail: action.trail,
      };

    default:
      return state;
  }
}
