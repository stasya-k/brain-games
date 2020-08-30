import gameStart from '../index.js';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isEven = (num) => num % 2 === 0;
const description = 'Answer "yes" if number is even, otherwise answer "no"';

const brainEven = () => {
  const question = getRandomInt(0, 10000);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => gameStart(description, brainEven);
