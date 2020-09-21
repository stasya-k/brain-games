import gameStart from '../index.js';
import getRandomInt from '../utils.js';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const genProgression = (firstNum, progressionStep) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    const currentNum = firstNum + progressionStep * i;
    progression.push(currentNum);
  }
  return progression;
};

const genBrainProgression = () => {
  const progressionStep = getRandomInt(1, 9);
  const firstNum = getRandomInt(1, 20);
  const hiddenNumIndex = getRandomInt(0, progressionLength - 1);
  const progression = genProgression(firstNum, progressionStep);
  const correctAnswer = String(progression[hiddenNumIndex]);
  progression[hiddenNumIndex] = '..';
  const question = progression.join(', ');

  return [question, correctAnswer];
};

export default () => gameStart(description, genBrainProgression);
