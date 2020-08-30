import readlineSync from 'readline-sync';

const numoOAttempts = 3;

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const gameStart = (description, game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(description);
  for (let i = 0; i < numoOAttempts; i += 1) {
    const [question, correctAnswer] = game();
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${name}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
