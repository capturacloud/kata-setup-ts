import { LeapYear } from '@/LeapYear'

it('should return false when 1997 is the input', () => {
  const input = new LeapYear();

  expect(input.leapYear(1997)).toBe(false);
});

it('should return true when 1992 is the input', () => {
  const input = new LeapYear();

  expect(input.leapYear(1992)).toBe(true);
});

it('should return true when 1996 is the input', () => {
  const input = new LeapYear();

  expect(input.leapYear(1996)).toBe(true);
});
