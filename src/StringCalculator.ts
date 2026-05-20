export class StringCalculator {

  add(numbers: string): number {
    if (numbers === '') {
      return 0;
    }

    let separator: string | RegExp = /[,\n]/;
    let textToSplit = numbers;

    if (numbers.startsWith('//')){
      separator = numbers[2];
      textToSplit = numbers.substring(4);
    }

    let numbersClean = textToSplit.split(separator);

    let total = 0;

    for (let i = 0; i < numbersClean.length; i++) {
      total += parseInt(numbersClean[i]);
    }

    return total;
  }
}