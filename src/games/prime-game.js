import { getRandomInt } from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2, limit = Math.sqrt(num); i <= limit; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const randomInt = getRandomInt();
  const gameQuestion = randomInt;
  const correctAnswer = isPrime(gameQuestion) ? 'yes' : 'no';
  return [gameQuestion, correctAnswer];
};

export { rule, getQuestionAndAnswer };
