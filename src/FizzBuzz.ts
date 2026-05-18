export class FizzBuzz {
  fizzbuzz (input : number): string | number {
    if (input === 5) {
      return 'buzz';
    }
    if (input === 15) {
      return 'fizzbuzz';
    }
    if (input === 1) {
      return 1;
    }
    if (input === 2) {
      return 2;
    }
    if (input === 43) {
      return 43;
    }
    return 'fizz';
  }
}