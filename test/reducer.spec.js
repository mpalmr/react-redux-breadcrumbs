import assert from 'assert';

import reducer, { defaultState } from '../src/reducer';
import { SET_TRAIL, PUSH } from '../src/action-types';


describe("reducer(state, action)", function () {
  it("when called with no parameters returns the default state", function () {
    assert.deepStrictEqual(reducer(), defaultState);
  });

  it("when called with (undefined, {}) returns the default state", function () {
    assert.deepStrictEqual(reducer(undefined, {}), defaultState);
  });


  describe("SET_TRAIL", function () {
    it("sets `state.trail`", function () {
      const action = {
        type: SET_TRAIL,
        trail: [],
      };

      assert.deepStrictEqual(reducer(defaultState, action), {
        ...defaultState,
        trail: action.trail,
      });
    });
  });


  describe("PUSH", function () {
    it("adds `action.segment` to `state.trail`", function () {
      const state = {
        ...defaultState,
        trail: [{ a: 2 }],
      };

      const action = {
        type: PUSH,
        segment: [{ a: 5 }],
      };

      assert.deepStrictEqual(reducer(state, action), {
        ...defaultState,
        trail: [
          { a: 2 },
          { a: 5 },
        ],
      });
    });
  });
});
