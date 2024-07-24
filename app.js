const value = parseInt(prompt('Введите число N:'));
const numbersStr = '0123456789';
const symbolsStr = '+_-$~';
const charsStr = 'abdefghijklmnoqrtuvwyzABDEFGHIJKLMNOQRTUVWYZ';

function generateString(n) {
  const allowedChars = charsStr + numbersStr + symbolsStr;
  let result = '';
  for (let i = 0; i < n; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    result += allowedChars.charAt(randomIndex);
  }
  return result;
}

function replaceStr(str, symbol, freezeStr) {
  let replaceCount = 0;
  const result = str.split('').reduce((acc, сhar) => {
    if (freezeStr.includes(сhar)) {
      return acc + сhar;
    }
    acc += symbol;
    replaceCount++;
    return acc;
  }, '');

  return [replaceCount, result];
}
6;
const generatedString = generateString(value);

const tags = document.querySelectorAll('.test');

tags[0].innerHTML = `Сгенерированная строка ${generatedString}`;

//Шаг 2
const firstSymbol = prompt('Введите какой то символ');

const [firstCount, resultStr] = replaceStr(
  generatedString,
  firstSymbol,
  numbersStr + symbolsStr
);

//Шаг 3
const secondSymbol = prompt('Введите еще один символ');
const [secondCount, resultStr2] = replaceStr(
  resultStr,
  secondSymbol,
  charsStr + symbolsStr
);

tags[1].innerHTML = `Строка после двух замен символов ${resultStr2}`;

//Шаг 4
const [thirdCount] = replaceStr(resultStr, secondSymbol, charsStr + numbersStr);
tags[2].innerHTML = `Повторы первого символа: ${firstCount}, Повторы первого символа: ${secondCount}, Незамененный символы: ${thirdCount}`;
