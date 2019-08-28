const assert = require('assert')
const { countSubstrings } = require('../src/647-palindromic-substrings')

describe('twoSum',  () => {
  it('计算这个字符串中有多少个回文子串', () => {
    assert.strictEqual(countSubstrings('babad'), 7);
    assert.strictEqual(countSubstrings('abc'), 3);
    assert.strictEqual(countSubstrings('aaa'), 6);
  });
});