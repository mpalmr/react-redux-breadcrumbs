import assert from 'assert';

import reducer, { defaultState } from '../src/reducer';
import { SET_TRAIL } from '../src/action-types';


describe("reducer()", function () {
  it("when called with no parameters returns the default state", function () {
    assert.deepStrictEqual(reducer(), defaultState);
  });

  it("when called with (undefined, {}) returns the default state", function () {
    assert.deepStrictEqual(reducer(undefined, {}), defaultState);
  });


  describe("SET_TRAIL", function () {
    it("replaces state 'trail'", function () {
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
});
