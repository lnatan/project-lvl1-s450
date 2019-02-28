import readlineSync from 'readline-sync';
import runGame from '..';

const randomNum = max => Math.floor(Math.random() * max);

const findGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGcd(b, a % b);
};

const task = 'Find the greatest common divisor of given numbers.';
const maxNum = 100;

const brainGcd = () => {
  const number1 = randomNum(maxNum);
  const number2 = randomNum(maxNum);

  const question = `${number1} ${number2}`;
  const expected = String(findGcd(number1, number2));

  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');

  return { answer, expected };
};

export default () => runGame(task, brainGcd);
