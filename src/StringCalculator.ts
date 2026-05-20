export class StringCalculator {

  add(numbers: string): number {
    if (numbers === '') {
      return 0;
    }

    if (numbers.length === 1) {
      return parseInt(numbers);
    }

    let numbersClean = numbers.split(',');

    if (numbers.length === 3) {
      return parseInt(numbersClean[0]) + parseInt(numbersClean[1]);
    }

    return parseInt(numbersClean[0]) + parseInt(numbersClean[1]) + parseInt(numbersClean[2]);
  }
}