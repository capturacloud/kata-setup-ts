import { LeapYear } from '@/LeapYear'

it('should return false when 1997 is the input', () => {
  const input = new LeapYear();

  expect(input.leapYear(1997)).toBe(false);
});

it.each([1996, 1992, 1988])( 'should return true when the input (%i) is divisible by 4', (input) => {
  const leap = new LeapYear();

  expect(leap.leapYear(input)).toBe(true);
});

it.each([1800, 1700, 1900])( 'should return false when the input (%i) is divisible by 100', (input) => {
  const leap = new LeapYear();

  expect(leap.leapYear(input)).toBe(false);
});

it('should return true when 1600 is the input', () => {
  const input = new LeapYear();

  expect(input.leapYear(1600)).toBe(true);
});