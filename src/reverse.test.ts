import { describe, expect, it } from 'vitest'
import { reverseString } from './reverse';
describe('reverse string', function () {
  it('should reverse string', function () {
    expect(reverseString('Hello')).toBe("olleH");
    expect(reverseString('World')).toBe("dlroW");
  });
});