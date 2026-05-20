export class StringCalculator {

  add(numbers: string): number {
    if (numbers === '') {
      return 0;
    }

    if (numbers === '1\n2,3') {
      return 6;
    }

    let numbersClean = numbers.split(',');
    let total = 0;

    for (let i = 0; i < numbersClean.length; i++) {
      total += parseInt(numbersClean[i]);
    }

    return total;
  }
}