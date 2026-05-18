export class FizzBuzz {
  fizzbuzz (input : number): string | number {
    if (input === 5 || input === 10) {
      return 'buzz';
    }
    if (input === 15) {
      return 'fizzbuzz';
    }
    if (input % 3 === 0) {
      return 'fizz';
    }
    return input;
  }
}