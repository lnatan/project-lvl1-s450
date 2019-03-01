import readlineSync from 'readline-sync';

const roundsCount = 3;

const runGame = (task, game) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${task}\n`);

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${name}!\n`);

  for (let i = 0; i < roundsCount; i += 1) {
    const { question, expected } = game();

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === expected) {
      console.log('Correct!\n');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expected}'`);
      console.log(`Let's try again, ${name}!\n`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGame;
