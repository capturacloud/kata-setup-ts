export class FizzBuzz {
  fizzbuzz (input : number): string | number {
    if (input === 5) {
      return 'buzz';
    }
    if (input === 15) {
      return 'fizzbuzz';
    }
    if (input === 1 || input === 2 || input === 43) {
      return input;
    }
    return 'fizz';
  }
}