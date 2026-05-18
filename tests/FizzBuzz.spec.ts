import { FizzBuzz } from '@/FizzBuzz'

it('should return fizz when 3 given', () => {
  const fizzbuzz = new FizzBuzz();

  expect(fizzbuzz.fizzbuzz(3)).toBe('fizz');

});

it('should return buzz when 5 given', () => {
  const fizzbuzz = new FizzBuzz();

  expect(fizzbuzz.fizzbuzz(5)).toBe('buzz');

});

it('should return fizzbuzz when 15 given', () => {
  const fizzbuzz = new FizzBuzz();

  expect(fizzbuzz.fizzbuzz(15)).toBe('fizzbuzz');

});

it.each([1, 2, 43]) (`should return the given number (%i) when not a multiple of 3 or 5` , (input) => {
  const fizzbuzz = new FizzBuzz();

  expect(fizzbuzz.fizzbuzz(input)).toBe(input);
})
