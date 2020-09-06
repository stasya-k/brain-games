import gameStart from '../index.js';
import getRandomInt from '../utils.js';

const isEven = (num) => num % 2 === 0;
const description = 'Answer "yes" if number is even, otherwise answer "no"';

const genBrainEven = () => {
  const question = getRandomInt(0, 10000);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => gameStart(description, genBrainEven);
