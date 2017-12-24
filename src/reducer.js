import { SET_TRAIL, PUSH, POP } from './action-types';


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


    case POP:
      return {
        ...state,
        trail: state.trail.slice(0, -1),
      };


    default:
      return state;
  }
}
