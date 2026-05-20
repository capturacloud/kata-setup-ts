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

it('should return 7 with a roll of 7', () => {
  const bowling = new Bowling()
  bowling.roll(7)
  expect(bowling.score()).toBe(7)
})

it('should return 9 with a roll of 7 and a roll of two', () => {
  const bowling = new Bowling()
  bowling.roll(7)
  bowling.roll(2)
  expect(bowling.score()).toBe(9)
})

it('should return 5 with a roll of 2 and a roll of 3', () => {
  const bowling = new Bowling()
  bowling.roll(2)
  bowling.roll(3)
  expect(bowling.score()).toBe(5)
})

it('should return 5 with rolls 113', () => {
  const bowling = new Bowling()
  bowling.roll(1)
  bowling.roll(1)
  bowling.roll(3)
  expect(bowling.score()).toBe(5)
})

it('should return 6 with rolls 1131', () => {
  const bowling = new Bowling()
  bowling.roll(1)
  bowling.roll(1)
  bowling.roll(3)
  bowling.roll(1)
  expect(bowling.score()).toBe(6)
})

it('should return 90 with rolls 90909090909090909090', () => {
  const bowling = new Bowling()
  const rolls: number[] = [9,0,9,0,9,0,9,0,9,0,9,0,9,0,9,0,9,0,9,0]
  for (const roll of rolls) {
    bowling.roll(roll)
  }
  expect(bowling.score()).toBe(90)
})

it('should return 100 with rolls 91909090909090909090 counting the spare', () => {
  const bowling = new Bowling()
  const rolls: number[] = [9,1,9,0,9,0,9,0,9,0,9,0,9,0,9,0,9,0,9,0]
  for (const roll of rolls) {
    bowling.roll(roll)
  }
  expect(bowling.score()).toBe(100)
})