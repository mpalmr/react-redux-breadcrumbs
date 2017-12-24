import { SET_TRAIL, PUSH } from './action-types';


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


    case PUSH:
      return {
        ...state,
        trail: state.trail.concat(action.segment),
      };


    default:
      return state;
  }
}
