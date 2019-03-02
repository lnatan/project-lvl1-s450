import randomNumFrom from '../utils';
import runGame from '..';

const isPrime = (num) => {
  if (num === 0 || num === 1) {
    return false;
  }
  const iter = (divider) => {
    if (num % divider === 0) {
      return false;
    }
    if (divider * 2 > num) {
      return true;
    }

    return iter(divider + 1);
  };
  return iter(2);
};

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const brainPrime = () => {
  const number = randomNumFrom(0, 100);

  const question = String(number);
  const expected = isPrime(number) ? 'yes' : 'no';

  return { question, expected };
};

export default () => runGame(task, brainPrime);
