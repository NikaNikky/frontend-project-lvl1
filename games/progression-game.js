import { getRandomInt } from '../src/index.js';

const rule = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  const progressionLength = getRandomInt(5, 10);
  const progressionDifference = getRandomInt(1, 5);
  const progressionStart = getRandomInt();
  const progression = [progressionStart];
  for (let i = 0; i <= progressionLength - 2; i += 1) {
    progression.push(progression[i] + progressionDifference);
  }
  const randomItem = getRandomInt(0, progressionLength - 1);
  const correctAnswer = String(progression[randomItem]);
  progression.splice(randomItem, 1, '..');
  const gameQuestion = `${progression}`;
  return [gameQuestion, correctAnswer];
};

export { rule, getQuestionAndAnswer };
