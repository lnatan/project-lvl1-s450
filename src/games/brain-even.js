import readlineSync from 'readline-sync';
import runGame from '..';

const isEven = num => num % 2 === 0;
const task = 'Answer "yes" if number even otherwise answer "no"';

const brainEven = () => {
  const number = Math.floor(Math.random() * 100);
  const question = String(number);
  const expected = isEven(number) ? 'yes' : 'no';

  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');

  return { answer, expected };
};

export default () => runGame(task, brainEven);
