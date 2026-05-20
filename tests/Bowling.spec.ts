import { Bowling } from '@/Bowling'

it('should return 0 if there is no rolls', () => {
  const bowling = new Bowling();

  expect(bowling.score()).toBe(0);
});

it('should return 2 with a roll of 2', () => {
  const bowling = new Bowling()
  bowling.roll(2)
  expect(bowling.score()).toBe(2)
})