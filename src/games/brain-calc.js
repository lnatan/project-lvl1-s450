import readlineSync from 'readline-sync';
import runGame from '..';

const randomNum = max => Math.floor(Math.random() * max);

const operations = [
  ['+', (a, b) => a + b],
  ['-', (a, b) => a - b],
  ['*', (a, b) => a * b],
];

const task = 'What is the result of the expression?';
const maxNum = 100;

const brainCalc = () => {
  const number1 = randomNum(maxNum);
  const number2 = randomNum(maxNum);
  const [operator, operationFn] = operations[randomNum(operations.length)];

  const question = `${number1} ${operator} ${number2}`;
  const expected = String(operationFn(number1, number2));

  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');

  return { answer, expected };
};

export default () => runGame(task, brainCalc);
