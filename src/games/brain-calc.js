import readlineSync from 'readline-sync';
import randomNumFrom from '../utils';
import runGame from '..';

const operations = [
  ['+', (a, b) => a + b],
  ['-', (a, b) => a - b],
  ['*', (a, b) => a * b],
];

const task = 'What is the result of the expression?';

const brainCalc = () => {
  const number1 = randomNumFrom(0, 100);
  const number2 = randomNumFrom(0, 100);
  const [operator, operationFn] = operations[randomNumFrom(0, operations.length - 1)];

  const question = `${number1} ${operator} ${number2}`;
  const expected = String(operationFn(number1, number2));

  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');

  return { answer, expected };
};

export default () => runGame(task, brainCalc);
