import { StringCalculator } from '@/StringCalculator'

it('should return zero when passed and empty string', () => {
  const calculator = new StringCalculator();

  expect(calculator.add('')).toBe(0);
});

it('should return 4 when passed a string with "4"', () => {
  const calculator = new StringCalculator();

  expect(calculator.add('4')).toBe(4);
});
