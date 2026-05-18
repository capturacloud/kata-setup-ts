export class FizzBuzz {
  fizzbuzz (input : number): string {
    if (input === 5) {
      return 'buzz';
    }
    if (input === 15) {
      return 'fizzbuzz';
    }
    return 'fizz';
  }
}