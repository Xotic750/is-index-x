<a
  href="https://travis-ci.org/Xotic750/is-index-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/is-index-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/is-index-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/is-index-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/is-index-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/is-index-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/is-index-x"
  title="npm version">
<img src="https://badge.fury.io/js/is-index-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/is-index-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/is-index-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/is-index-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/is-index-x?branch=master"
  alt="bettercodehub score" height="18">
</a>

<a name="module_is-index-x"></a>

## is-index-x

Determine whether the passed value is a zero based index.

<a name="exp_module_is-index-x--module.exports"></a>

### `module.exports(value, [length])` ⇒ <code>boolean</code> ⏏

This method determines whether the passed value is a zero based index.
JavaScript arrays are zero-indexed: the first element of an array is at
index 0, and the last element is at the index equal to the value of the
array's length property minus 1.

**Kind**: Exported function  
**Returns**: <code>boolean</code> - A Boolean indicating whether or not the given value is a
zero based index within bounds.

| Param    | Type                                       | Default                       | Description                                          |
| -------- | ------------------------------------------ | ----------------------------- | ---------------------------------------------------- |
| value    | <code>number</code> \| <code>string</code> |                               | The value to be tested for being a zero based index. |
| [length] | <code>number</code>                        | <code>MAX_SAFE_INTEGER</code> | The length that sets the upper bound.                |

**Example**

```js
import isIndex from 'is-index-x';

console.log(isIndex(0)); // true
console.log(isIndex(1)); // true
console.log(isIndex('10')); // true

console.log(isIndex(-100000)); // false
console.log(isIndex(2 ** 53)); // false
console.log(isIndex(0.1)); // false
console.log(isIndex(Math.PI)); // false
console.log(isIndex(NaN)); // false
console.log(isIndex(Infinity)); // false
console.log(isIndex(-Infinity)); // false
console.log(isIndex(true)); // false
console.log(isIndex(false)); // false
console.log(isIndex([1])); // false
console.log(isIndex(10, 10)); // false
```
