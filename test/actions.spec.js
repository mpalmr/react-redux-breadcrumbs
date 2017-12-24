import assert from 'assert';

import { setTrail, push, pop } from '../src/actions';
import { SET_TRAIL, PUSH, POP } from '../src/action-types';


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


  describe("push(segment)", function () {
    it("returns a PUSH action", function () {
      assert.deepStrictEqual(push({ a: 5 }), {
        type: PUSH,
        segment: { a: 5 },
      });
    });
  });


  describe("pop()", function () {
    it("returns a POP action", function () {
      assert.deepStrictEqual(pop(), { type: POP });
    });
  });
});
