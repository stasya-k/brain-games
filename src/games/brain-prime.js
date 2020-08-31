import { gameStart, getRandomInt } from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  } if (number === 2) {
    return true;
  }
  const prime = (num, div) => {
    if (num / 2 < div) {
      return true;
    } if (num % div === 0) {
      return false;
    } return prime(num, div + 1);
  }; return prime(number, 2);
};

const brainPrime = () => {
  const question = getRandomInt(-100, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => gameStart(description, brainPrime);
