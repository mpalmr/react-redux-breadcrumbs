import assert from 'assert';

import { setTrail } from '../src/actions';
import { SET_TRAIL } from '../src/action-types';


describe("actions", function () {
  describe("setTrail(trail)", function () {
    it("throws an error when `trail` is not an array", function () {
      assert.throws(setTrail, 'trail must be an array');
    });

    it("when `trail` is an array return a SET_TRAIL action", function () {
      assert.deepStrictEqual(setTrail([]), {
        type: SET_TRAIL,
        trail: [],
      });
    });
  });
});
