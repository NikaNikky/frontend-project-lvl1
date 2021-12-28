#!/usr/bin/env node
import readlineSync from 'readline-sync';
import sayName from '../src/cli.js';

const getRandomInt = (min = 0, max = 100) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const runEvenGame = () => {
    const userName = sayName();
    const isEven = (num) => num % 2 === 0;
    
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  
    for (let counter = 0; counter < 3; counter++) {
        const randomNum = getRandomInt();
        console.log(`Question: ${randomNum}`);
        const userAnswer = readlineSync.question('Your answer: ');
        const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
        if (correctAnswer === userAnswer) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
            return;
        }
    }
    console.log(`Congratulations, ${userName}!`);
};

runEvenGame();
