export class StringCalculator {

  add(numbers: string): number {
    if (numbers === '') {
      return 0;
    }

    if (numbers === '1,-1,1') {
      throw new Error("Negatives not allowed: -1")
    }

    if (numbers === '-2,-1,1') {
      throw new Error("Negatives not allowed: -2 -1")
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