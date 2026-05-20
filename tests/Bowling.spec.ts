import { Bowling } from '@/Bowling'

it('should return 0 if there is no rolls', () => {
  const bowling = new Bowling();

  expect(bowling.score()).toBe(0);
});
