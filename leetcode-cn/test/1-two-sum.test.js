const assert = require('assert')
const { twoSum } = require('../src/1-two-sum')

describe('twoSum',  () => {
  it('should twoSum two numbers', () => {
    assert.equal(JSON.stringify(twoSum([3, 2, 4], 6)), JSON.stringify([1, 2]));
    assert.equal(twoSum([11, 15, 5, 3, 8, 9, 2, 7], 9).toString(), [6, 7].toString());
    assert.equal(twoSum([0,4,3,0], 0).toString(), [0, 3].toString());
    assert.equal(twoSum([2,5,5,11], 10).toString(), [1, 2].toString());
    // 这种方法在某些情况下是可行的，当两个数组的元素顺序相同且元素都可以转换成字符串的情况下确实可行，但是这样的代码存有隐患，比如数字被转换成字符串，数字“1”和字符串“1”会被认为相等，可能造成调试困难，不推荐使用
  });

  // it('should not coerce arguments to numbers', function() {
    // assert.equal(twoSum([3, 2, 4], 6), [1, 2]);
    // assert.equal(twoSum([11, 15, 5, 3, 8, 9, 2, 7], 9), [6, 7]);
  // });
});