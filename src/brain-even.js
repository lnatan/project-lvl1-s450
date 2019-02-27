import readlineSync from 'readline-sync';

// welcome part
console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no"\n');
const name = readlineSync.question('May I have your name? ');
console.log(`Hi, ${name}!\n`);

// game part
const rightAnswersCount = 3;
let counter = 0;

const brainEven = () => {
  const number = Math.floor(Math.random() * 100);
  const expected = number % 2 === 0 ? 'yes' : 'no';

  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer === expected) {
    console.log('Correct!\n');
    counter += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expected}'.\n Let's try again, ${name}!\n`);
  }

  if (rightAnswersCount === counter) {
    console.log(`Congratulations, ${name}!`);
    return;
  }

  brainEven();
};

export default brainEven;
