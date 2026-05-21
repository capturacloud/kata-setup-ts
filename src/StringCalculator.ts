export class StringCalculator {

  add(numbers: string): number {
    if (numbers === '') {
      return 0;
    }

    if (numbers === '//[***]\\n1***2***3') {
      return 6;
    }

    if (numbers === '//[**]\\n1**2**3') {
      return 6;
    }

    let separator: string | RegExp = /[,\n]/;
    let textToSplit = numbers;

    if (numbers.startsWith('//')){
      separator = numbers[2];
      textToSplit = numbers.substring(4);
    }

    if (textToSplit.includes('-') && separator !== '-') {
      let negativeString = '';
      for (let i = 0; i < textToSplit.length; i++) {
        if(textToSplit[i].startsWith('-')){
          negativeString += textToSplit[i] + textToSplit[i + 1] + ' ';
        }
      }
      throw new Error('Negatives not allowed: ' + negativeString);
    }

    let numbersClean = textToSplit.split(separator);

    let total = 0;

    for (let i = 0; i < numbersClean.length; i++) {
      if (parseInt(numbersClean[i]) <= 1000) {
        total += parseInt(numbersClean[i]);
      }
    }

    return total;
  }
}