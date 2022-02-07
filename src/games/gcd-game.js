import { getRandomInt } from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getGcd = (operand1, operand2) => {
  let a = operand1;
  let b = operand2;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

const getQuestionAndAnswer = () => {
  const operand1 = getRandomInt(1, 20);
  const operand2 = getRandomInt(1, 20);
  const gameQuestion = `${operand1}, ${operand2}`;
  const correctAnswer = String(getGcd(operand1, operand2));
  return [gameQuestion, correctAnswer];
};

export { rule, getQuestionAndAnswer };
