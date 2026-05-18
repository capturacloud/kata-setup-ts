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

it('should return 1 when 1 given', () => {
  const fizzbuzz = new FizzBuzz();

  expect(fizzbuzz.fizzbuzz(1)).toBe(1);

});

it('should return 2 when 2 given', () => {
  const fizzbuzz = new FizzBuzz();

  expect(fizzbuzz.fizzbuzz(2)).toBe(2);

});


