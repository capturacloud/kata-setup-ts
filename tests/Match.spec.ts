import { Match } from '@/Match'
import {Roll} from "@/Roll";

it('should return 0 if there is no rolls', () => {
  const match = new Match();

  expect(match.score()).toBe(0);
});

it('should return 3 with a roll of 3', () => {
  const match = new Match()
  const roll = new Roll(3);
  match.addRoll(roll)
  expect(match.score()).toBe(3)
})

it('should return 6 with a roll of 6', () => {
  const match = new Match()
  const roll = new Roll(6);
  match.addRoll(roll)
  expect(match.score()).toBe(6)
})

it('should return 5 with a roll of 3 and a roll of 2', () => {
  const match = new Match()
  match.addRoll(new Roll(3))
  match.addRoll(new Roll(2))
  expect(match.score()).toBe(5)
})

it('should return 9 with a roll of 6 and a roll of 3', () => {
  const match = new Match()
  match.addRoll(new Roll(6))
  match.addRoll(new Roll(3))
  expect(match.score()).toBe(9)
})

it('should return 5 with rolls 113', () => {
  const match = new Match()
  match.addRoll(new Roll(1))
  match.addRoll(new Roll(1))
  match.addRoll(new Roll(3))
  expect(match.score()).toBe(5)
})

it('should return 6 with rolls 1131', () => {
  const match = new Match()
  match.addRoll(new Roll(1))
  match.addRoll(new Roll(1))
  match.addRoll(new Roll(3))
  match.addRoll(new Roll(1))
  expect(match.score()).toBe(6)
})

it('should return 90 with rolls 90909090909090909090', () => {
  const match = new Match()
  const rolls: number[] = [9,0,9,0,9,0,9,0,9,0,9,0,9,0,9,0,9,0,9,0]
  for (const roll of rolls) {
    match.addRoll(new Roll(roll))
  }
  expect(match.score()).toBe(90)
})

it('should return 100 with rolls 91909090909090909090 counting the spare', () => {
  const match = new Match()
  const rolls: number[] = [9,1,9,0,9,0,9,0,9,0,9,0,9,0,9,0,9,0,9,0]
  for (const roll of rolls) {
    match.addRoll(new Roll(roll))
  }
  expect(match.score()).toBe(100)
})

it('should return 109 with rolls 919090909090909090918 counting the spare', () => {
  const match = new Match()
  const rolls: number[] = [9,1,9,0,9,0,9,0,9,0,9,0,9,0,9,0,9,0,9,1,8]
  for (const roll of rolls) {
    match.addRoll(new Roll(roll))
  }
  expect(match.score()).toBe(109)
})
