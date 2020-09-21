import gameStart from '../index.js';
import getRandomInt from '../utils.js';

const description = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const getCorrectAnswer = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operation: '${operation}'!`);
  }
};

const genBrainCalc = () => {
  const num1 = getRandomInt(0, 20);
  const num2 = getRandomInt(0, 20);
  const operation = operations[getRandomInt(0, operations.length - 1)];
  const question = `${num1} ${operation} ${num2}`;
  const correctAnswer = String(getCorrectAnswer(num1, num2, operation));
  return [question, correctAnswer];
};

export default () => gameStart(description, genBrainCalc);
