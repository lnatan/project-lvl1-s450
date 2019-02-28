import readlineSync from 'readline-sync';

const roundsCount = 3;
let counter = 0;

const runGame = (task, game) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${task}\n`);

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${name}!\n`);

  while (counter < roundsCount) {
    const { answer, expected } = game();

    if (answer === expected) {
      console.log('Correct!\n');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expected}'`);
      console.log(`Let's try again, ${name}!\n`);
      return;
    }

    counter += 1;
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGame;
