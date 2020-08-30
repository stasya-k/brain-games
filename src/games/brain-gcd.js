import gameStart from '../index.js';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const description = 'Find the greatest common divisor of given numbers.';
const findDivisor = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  } return findDivisor(num2, num1 % num2);
};
const brainGcd = () => {
  const num1 = getRandomInt(0, 20);
  const num2 = getRandomInt(0, 20);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(findDivisor(num1, num2));
  return [question, correctAnswer];
};
export default () => gameStart(description, brainGcd);
