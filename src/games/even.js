import randomNumFrom from '../utils';
import runGame from '..';

const isEven = num => num % 2 === 0;
const task = 'Answer "yes" if number even otherwise answer "no"';

const brainEven = () => {
  const number = randomNumFrom(0, 100);
  const question = String(number);
  const expected = isEven(number) ? 'yes' : 'no';

  return { question, expected };
};

export default () => runGame(task, brainEven);
