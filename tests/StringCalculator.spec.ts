import { StringCalculator } from '@/StringCalculator'

it('should return zero when passed and empty string', () => {
  const calculator = new StringCalculator();

  expect(calculator.add('')).toBe(0);
});

it('should return 4 when passed a string with "4"', () => {
  const calculator = new StringCalculator();

  expect(calculator.add('4')).toBe(4);
});

it('should return 6 when passed a string with "2,4"', () => {
  const calculator = new StringCalculator();

  expect(calculator.add('2,4')).toBe(6);
});

it('should return 12 when passed a string with "3,3,6"', () => {
  const calculator = new StringCalculator();

  expect(calculator.add('3,3,6')).toBe(12);
});

it('should return 16 when passed a string with "3,3,6,4"', () => {
  const calculator = new StringCalculator();

  expect(calculator.add('3,3,6,4')).toBe(16);
});

it('should return 25 when passed a string with "3,3,6,4,4,5"', () => {
  const calculator = new StringCalculator();

  expect(calculator.add('3,3,6,4,4,5')).toBe(25);
});

it('should return 6 when passed a string with "1\n2,3"', () => {
  const calculator = new StringCalculator();

  expect(calculator.add('1\n2,3')).toBe(6);
});

it('should return 12 when passed a string with "1\n2,3\n6"', () => {
  const calculator = new StringCalculator();

  expect(calculator.add('1\n2,3\n6')).toBe(12);
});

it('should return 3 when passed a string with "//;\\n1;2"', () => {
  const calculator = new StringCalculator();

  expect(calculator.add('//;\\n1;2')).toBe(3);
});

it('should return 3 when passed a string with "//-\\n1-2"', () => {
  const calculator = new StringCalculator();

  expect(calculator.add('//-\\n1;2')).toBe(3);
});

