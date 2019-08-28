const assert = require('assert')

const { isPalindrome } = require('../src/9-palindrome-number')

describe('isPalindrome',  () => {
  it('是否是回文', () => {
    assert.strictEqual(isPalindrome('babad'), false);
    assert.strictEqual(isPalindrome(-121), false);
    assert.strictEqual(isPalindrome(121), true);
  });
});