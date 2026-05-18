import { LeapYear } from '@/LeapYear'

it('should return false when 1997 is the input', () => {
  const input = new LeapYear();

  expect(input.leapYear(1997)).toBe(false);
});

it.each([1996, 1992, 1988])( 'should return true when the input (%i) is divisible by 4', (input) => {
  const leap = new LeapYear();

  expect(leap.leapYear(input)).toBe(true);
});

it('should return false when 1800 is the input', () => {
  const input = new LeapYear();

  expect(input.leapYear(1800)).toBe(false);
});