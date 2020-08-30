import gameStart from '../index.js';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const description = 'What is the result of the expression?';

const brainCalc = () => {
  let question = ' ';
  let correctAnswer = ' ';
  const num1 = getRandomInt(0, 20);
  const num2 = getRandomInt(0, 20);
  const operations = getRandomInt(1, 3);
  switch (operations) {
    case 1: correctAnswer = String(num1 + num2);
      question = `${num1} + ${num2}`;
      break;
    case 2: correctAnswer = String(num1 - num2);
      question = `${num1} - ${num2}`;
      break;
    default: correctAnswer = String(num1 * num2);
      question = `${num1} * ${num2}`;
      break;
  }
  return [question, correctAnswer];
};

export default () => gameStart(description, brainCalc);
