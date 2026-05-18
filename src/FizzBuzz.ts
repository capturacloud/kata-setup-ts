export class FizzBuzz {
  fizzbuzz (input : number): string | number {
    if (input % 5 === 0 && input % 3 === 0) {
      return 'fizzbuzz';
    }
    if (input % 5 === 0) {
      return 'buzz';
    }
    if (input % 3 === 0) {
      return 'fizz';
    }
    return input;
  }
}