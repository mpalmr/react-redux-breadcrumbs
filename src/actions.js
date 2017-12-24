import { SET_TRAIL, PUSH, POP } from './action-types';


export function setTrail(trail) {
  if (!Array.isArray(trail)) throw new Error('trail must be an array');

  return {
    type: SET_TRAIL,
    trail,
  };
}


export function push(segment) {
  return {
    type: PUSH,
    segment,
  };
}


export function pop() {
  return { type: POP };
}
