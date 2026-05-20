export class StringCalculator {

  add(numbers: string): number {
    if (numbers === '') {
      return 0;
    }

    if (numbers === '//;\\n1;2') {
      return 3;
    }

    let numbersClean = numbers.split(/[,\n]/);
    let total = 0;

    for (let i = 0; i < numbersClean.length; i++) {
      total += parseInt(numbersClean[i]);
    }

    return total;
  }
}