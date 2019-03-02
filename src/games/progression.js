import randomNumFrom from '../utils';
import runGame from '..';

const makeProgression = (start, step, length) => {
  const arr = [];

  for (let i = 0; i < length; i += 1) {
    arr.push(start + step * i);
  }

  return arr;
};

const task = 'What number is missing in the progression?';

const brainProgression = () => {
  const start = randomNumFrom(0, 100);
  const step = randomNumFrom(1, 20);
  const length = 10;
  const progression = makeProgression(start, step, length);

  const hiddenNumIndex = randomNumFrom(0, progression.length - 1);

  const progressionWithHiddenNum = [...progression];
  progressionWithHiddenNum[hiddenNumIndex] = '..';

  const question = progressionWithHiddenNum.join(' ');
  const expected = String(progression[hiddenNumIndex]);

  return { question, expected };
};

export default () => runGame(task, brainProgression);
