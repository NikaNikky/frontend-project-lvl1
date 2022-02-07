import readlineSync from 'readline-sync';

const getRandomInt = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

const runGame = (rule, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(rule);

  for (let counter = 0; counter < 3; counter += 1) {
    const questionAndAnswer = getQuestionAndAnswer();
    const gameQuestion = questionAndAnswer[0];
    const correctAnswer = questionAndAnswer[1];
    console.log(`Question: ${gameQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export { runGame, getRandomInt };
