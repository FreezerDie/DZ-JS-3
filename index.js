// 1. Написать функцию возведения числа в степень.

const power = (num, pValue) => {
  if (pValue == 1) {
    return num;
  } else {
    return num * power(num, pValue - 1);
  }
};

console.log(power(5, 2));

// 2. Написать функцию поиска наибольшего общего делителя.

const gcd = (num1, num2) => {
  if (num2 == 0) {
    return num1;
  } else {
    return gcd(num2, num1 % num2);
  }
};

console.log(gcd(20, 12));

// 3. Написать функцию для поиска максимальной цифры в числе.

const greatestDigit = (num = 0, greatest = 0) => {
  if (num) {
    const max = Math.max(num % 10, greatest);
    return greatestDigit(Math.floor(num / 10), max);
  }
  return greatest;
};

console.log(greatestDigit(45654356));
// 4. Написать функцию, которая определяет простое ли переданное число.

const isNumPrime = (num, div = 3) => {
  if (num == 2) {
    return true;
  }
  if (num < 2 || num % 2 == 0) {
    return false;
  }
  if (Math.sqrt(div) > num) {
    return true;
  }
  if (num % div == 0) {
    return false;
  }
  return isNumPrime(num, div + 2);
};

console.log(isNumPrime(2));

// 5. Написать функцию для вывода всех множителей переданного числа в возрастающем порядке.
// Например: число 18 – множители 2 * 3 * 3.
const factors = (num, factorsArr = [], fNum = 2) => {
  if (fNum > Math.sqrt(num)) {
    factorsArr.push(num);
    return factorsArr;
  } else if (num % fNum == 0) {
    factorsArr.push(fNum);
    factors(num / fNum, factorsArr, fNum);
  } else {
    factors(num, factorsArr, ++fNum);
  }
  return factorsArr.join("*");
};

console.log(factors(12));
// 6. Написать функцию, которая возвращает число Фибоначчи по переданному порядковому номеру.
// Числа Фибоначчи: 1, 1, 2, 3, 5, 8, 13… Ряд основывается на том, что каждое число равно
// сумме двух предыдущих чисел. Например: порядковый номер 3 – число 2, порядковый номер 6 – число 8.
const fibonacci = (fibId) => {
  if (fibId == 1 || fibId == 2) {
    return 1;
  }
  return fibonacci(fibId - 1) + fibonacci(fibId - 2);
};

console.log(fibonacci(10));
