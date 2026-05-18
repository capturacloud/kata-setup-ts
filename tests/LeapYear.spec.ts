import { LeapYear } from '@/LeapYear'

it('should return false when 1997 is the input', () => {
  const input = new LeapYear();

  expect(input.leapYear(1997)).toBe(false);
});
