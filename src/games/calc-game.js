import { getRandomInt } from '../index.js';

const rule = 'What is the result of the expression?';

const operators = ['+', '-', '*'];
const calculation = (operand1, operator, operand2) => {
  let result = 0;
  if (operator === '+') {
    result = operand1 + operand2;
  } else if (operator === '-') {
    result = operand1 - operand2;
  } else if (operator === '*') {
    result = operand1 * operand2;
  }
  return result;
};

const getQuestionAndAnswer = () => {
  const operand1 = getRandomInt(1, 20);
  const operand2 = getRandomInt(1, 20);
  const operator = operators[getRandomInt(0, 2)];
  const gameQuestion = `${operand1} ${operator} ${operand2}`;
  const correctAnswer = String(calculation(operand1, operator, operand2));
  return [gameQuestion, correctAnswer];
};

export { rule, getQuestionAndAnswer };
