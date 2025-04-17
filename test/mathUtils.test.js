import { expect } from 'chai';
import { add, subtract, multiply, divide } from '../utils/mathUtils.js';

describe('Math Functions', () => {

  describe('add', () => {
    it('should return the sum of two numbers', () => {
      expect(add(2, 3)).to.equal(5);
      expect(add(-2, 3)).to.equal(1);
      expect(add(0, 0)).to.equal(0);
    });
  });

  describe('subtract', () => {
    it('should return the difference of two numbers', () => {
      expect(subtract(5, 3)).to.equal(2);
      expect(subtract(3, 5)).to.equal(-2);
      expect(subtract(0, 0)).to.equal(0);
    });
  });

  describe('multiply', () => {
    it('should return the product of two numbers', () => {
      expect(multiply(4, 3)).to.equal(12);
      expect(multiply(-2, 3)).to.equal(-6);
      expect(multiply(0, 5)).to.equal(0);
    });
  });

  describe('divide', () => {
    it('should return the quotient of two numbers', () => {
      expect(divide(6, 3)).to.equal(2);
      expect(divide(-6, 2)).to.equal(-3);
    });

    it('should throw an error when dividing by zero', () => {
      expect(() => divide(5, 0)).to.throw("Cannot divide by zero");
    });
  });

});
