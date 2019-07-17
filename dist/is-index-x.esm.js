import safeToString from 'to-string-symbols-supported-x';
import toInteger from 'to-integer-x';
import toNumber from 'to-number-x';
import mathClamp from 'math-clamp-x';
var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
var rxTest = reIsUint.test;
/**
 * This method determines whether the passed value is a zero based index.
 * JavaScript arrays are zero-indexed: the first element of an array is at
 * index 0, and the last element is at the index equal to the value of the
 * array's length property minus 1.
 *
 * @param {number|string} value - The value to be tested for being a zero based index.
 * @param {number} [length=MAX_SAFE_INTEGER] - The length that sets the upper bound.
 * @returns {boolean} A Boolean indicating whether or not the given value is a
 * zero based index within bounds.
 */

var isIndex = function isIndex(value, length) {
  var string = safeToString(value);

  if (rxTest.call(reIsUint, string) === false) {
    return false;
  }

  var number = toNumber(string);

  if (arguments.length > 1) {
    return number < mathClamp(toInteger(length), MAX_SAFE_INTEGER);
  }

  return number < MAX_SAFE_INTEGER;
};

export default isIndex;

//# sourceMappingURL=is-index-x.esm.js.map