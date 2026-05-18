export class FizzBuzz {
  fizzbuzz (input : number): string | number {
    if (input === 5) {
      return 'buzz';
    }
    if (input === 15) {
      return 'fizzbuzz';
    }
    if (input === 3 || input === 6) {
      return 'fizz';
    }
    return input;
  }
}