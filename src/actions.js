import { SET_TRAIL } from './action-types';


export function setTrail(trail) {
  if (!Array.isArray(trail)) throw new Error('trail must be an array');

  return {
    type: SET_TRAIL,
    trail,
  };
}


export function push() {}
