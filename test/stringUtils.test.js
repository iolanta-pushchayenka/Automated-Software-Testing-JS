import { expect } from 'chai';
import { capitalize, reverseString, isPalindrome } from '../utils/stringUtils.js'; 

describe('String Utilities', () => {

  describe('capitalize', () => {
    it('should capitalize the first letter of a string', () => {
      expect(capitalize('hello')).to.equal('Hello');
      expect(capitalize('world')).to.equal('World');
    });

    it('should not change an already capitalized string', () => {
      expect(capitalize('Hello')).to.equal('Hello');
    });

    it('should return an empty string when given an empty string', () => {
      expect(capitalize('')).to.equal('');
    });

    it('should throw an error if input is not a string', () => {
      expect(() => capitalize(123)).to.throw("Input must be a string");
    });
  });

  describe('reverseString', () => {
    it('should reverse the string', () => {
      expect(reverseString('hello')).to.equal('olleh');
      expect(reverseString('abc')).to.equal('cba');
    });

    it('should return an empty string when given an empty string', () => {
      expect(reverseString('')).to.equal('');
    });

    it('should throw an error if input is not a string', () => {
      expect(() => reverseString(null)).to.throw("Input must be a string");
    });
  });

  describe('isPalindrome', () => {
    it('should return true for palindromes', () => {
      expect(isPalindrome('mom')).to.be.true;
      expect(isPalindrome('racecar')).to.be.true;
      expect(isPalindrome('')).to.be.true; // empty string is a valid palindrome
    });

    it('should return false for non-palindromes', () => {
      expect(isPalindrome('hello')).to.be.false;
      expect(isPalindrome('world')).to.be.false;
    });

    it('should be case-sensitive', () => {
      expect(isPalindrome('Mom')).to.be.false;
    });

    it('should throw an error if input is not a string', () => {
      expect(() => isPalindrome({})).to.throw("Input must be a string");
    });
  });

});
