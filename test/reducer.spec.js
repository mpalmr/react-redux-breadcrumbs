import assert from 'assert';

import reducer, { defaultState } from '../src/reducer';


describe("reducer", function () {
  it("when called with no parameters returns the default state", function () {
    assert.deepStrictEqual(reducer(), defaultState);
  });

  it("when called with (undefined, {}) returns the default state", function () {
    assert.deepStrictEqual(reducer(undefined, {}), defaultState);
  });
});
