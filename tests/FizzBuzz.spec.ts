import { FizzBuzz } from '@/FizzBuzz'

it.each([3, 6, 42]) (`should return fizz when input is a multiple of 3 (%i)` , (input) => {
  const fizzbuzz = new FizzBuzz();

  expect(fizzbuzz.fizzbuzz(input)).toBe('fizz');
})

it.each([5, 10, 20]) (`should return buzz when input is a multiple of 5 (%i)` , (input) => {
  const fizzbuzz = new FizzBuzz();

  expect(fizzbuzz.fizzbuzz(input)).toBe('buzz');
})


it('should return fizzbuzz when 15 given', () => {
  const fizzbuzz = new FizzBuzz();

  expect(fizzbuzz.fizzbuzz(15)).toBe('fizzbuzz');

});

it.each([1, 2, 43]) (`should return the given number (%i) when not a multiple of 3 or 5` , (input) => {
  const fizzbuzz = new FizzBuzz();

  expect(fizzbuzz.fizzbuzz(input)).toBe(input);
})
