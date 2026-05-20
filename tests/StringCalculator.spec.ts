import { StringCalculator } from '@/StringCalculator'

it('should return zero when passed and empty string', () => {
  const calculator = new StringCalculator();

  expect(calculator.add('')).toBe(0);
});
