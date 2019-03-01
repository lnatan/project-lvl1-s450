import readlineSync from 'readline-sync';
import randomNumFrom from '../utils';
import runGame from '..';

const findGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGcd(b, a % b);
};

const task = 'Find the greatest common divisor of given numbers.';

const brainGcd = () => {
  const number1 = randomNumFrom(0, 100);
  const number2 = randomNumFrom(0, 100);

  const question = `${number1} ${number2}`;
  const expected = String(findGcd(number1, number2));

  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');

  return { answer, expected };
};

export default () => runGame(task, brainGcd);
