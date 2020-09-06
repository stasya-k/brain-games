import gameStart from '../index.js';
import getRandomInt from '../utils.js';

const description = 'What number is missing in the progression?';

const randomProgression = (firstNum, progressionStep, progressionLength, hiddenNumInd) => {
  let result = ' ';
  for (let i = 0; i < progressionLength; i += 1) {
    const num = `${firstNum + progressionStep * i} `;
    if (i === hiddenNumInd) {
      result += '.. ';
    } else {
      result += num;
    }
  }
  return result.trim();
};
const progressionLength = 10;
const genBrainProgression = () => {
  const progressionStep = getRandomInt(1, 9);
  const firstNum = getRandomInt(1, 20);
  const hiddenNumInd = getRandomInt(0, progressionLength - 1);
  const question = randomProgression(firstNum, progressionStep, progressionLength, hiddenNumInd);
  const correctAnswer = String(firstNum + progressionStep * hiddenNumInd);

  return [question, correctAnswer];
};
export default () => gameStart(description, genBrainProgression);
