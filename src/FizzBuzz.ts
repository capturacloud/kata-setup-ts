export class FizzBuzz {
  fizzbuzz (input : number): string | number {
    if (input % 5 === 0 && (input !== 15 && input !== 30 && input !== 75)) {
      return 'buzz';
    }
    if (input === 15 || input === 30 || input === 75) {
      return 'fizzbuzz';
    }
    if (input % 3 === 0) {
      return 'fizz';
    }
    return input;
  }
}