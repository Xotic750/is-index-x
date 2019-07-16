import noop from 'lodash/noop';
import isIndex from '../src/is-index-x';

describe('isIndex', function() {
  it('is a function', function() {
    expect.assertions(1);
    expect(typeof isIndex).toBe('function');
  });

  it('should return true', function() {
    expect.assertions(10);
    expect(isIndex(0)).toBe(true);
    expect(isIndex(1)).toBe(true);

    expect(isIndex(Number.MAX_SAFE_INTEGER - 1)).toBe(true);
    expect(isIndex(1, 5)).toBe(true);
    expect(isIndex(1, '5')).toBe(true);
    expect(isIndex('1', 5)).toBe(true);
    expect(isIndex('1', '5')).toBe(true);
    expect(isIndex(1, '0xa')).toBe(true);
    expect(isIndex(1, '0o10')).toBe(true);
    expect(isIndex(1, '0b10')).toBe(true);
  });

  it('should return false', function() {
    expect.assertions(32);
    expect(isIndex()).toBe(false);
    expect(isIndex(-1)).toBe(false);
    expect(isIndex(0.1)).toBe(false);
    expect(isIndex('')).toBe(false);
    expect(isIndex('0xa')).toBe(false);
    expect(isIndex('0o1')).toBe(false);
    expect(isIndex('0b1')).toBe(false);
    expect(isIndex(true)).toBe(false);
    expect(isIndex(null)).toBe(false);
    expect(isIndex(NaN)).toBe(false);
    expect(isIndex(Infinity)).toBe(false);
    expect(isIndex(-Infinity)).toBe(false);
    expect(isIndex({})).toBe(false);
    expect(isIndex(noop)).toBe(false);
    expect(isIndex([])).toBe(false);
    expect(isIndex([1, 2])).toBe(false);

    expect(isIndex(Number.MAX_SAFE_INTEGER)).toBe(false);

    expect(isIndex(Number.MAX_SAFE_INTEGER, Infinity)).toBe(false);

    expect(isIndex(Number.MAX_SAFE_INTEGER, -Infinity)).toBe(false);

    expect(isIndex(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)).toBe(false);

    expect(isIndex(Number.MAX_SAFE_INTEGER - 1, NaN)).toBe(false);

    expect(isIndex(Number.MAX_SAFE_INTEGER - 1, '')).toBe(false);

    expect(isIndex(Number.MAX_SAFE_INTEGER - 1, null)).toBe(false);

    expect(isIndex(Number.MAX_SAFE_INTEGER - 1, void 0)).toBe(false);
    expect(isIndex(100, '0xa')).toBe(false);
    expect(isIndex(100, '0o10')).toBe(false);
    expect(isIndex(100, '0b10')).toBe(false);
    expect(isIndex(6, 5)).toBe(false);
    expect(isIndex('6', 5)).toBe(false);
    expect(isIndex(6, '5')).toBe(false);
    expect(isIndex('6', '5')).toBe(false);
    expect(isIndex(10, 10)).toBe(false);
  });
});
