import { getRandomInt } from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getQuestionAndAnswer = () => {
  const randomInt = getRandomInt();
  const gameQuestion = randomInt;
  const correctAnswer = isEven(gameQuestion) ? 'yes' : 'no';
  return [gameQuestion, correctAnswer];
};

export { rule, getQuestionAndAnswer };
