import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isEven = (num) => num % 2 === 0;
const numoOAttempts = 3;

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if number is even, otherwise answer "no"');

  for (let i = 1; i <= numoOAttempts; i += 1) {
    const question = getRandomInt(0, 100);
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
    const correctAnswer = isEven(question) ? 'yes' : 'no';

    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${name}`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default brainEven;
