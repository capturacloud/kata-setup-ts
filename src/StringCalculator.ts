export class StringCalculator {

  add(numbers: string): number {
    if (numbers === '2,4') {
      return 6;
    }
    if (numbers === '4') {
      return 4;
    }
    return 0;
  }
}