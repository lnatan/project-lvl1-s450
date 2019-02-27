import readlineSync from 'readline-sync';

const getName = () => {
  console.log('Welcome to the Brain Games!\n');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${name}!`);
};

export default getName;
