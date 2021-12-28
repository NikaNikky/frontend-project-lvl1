#!/usr/bin/env node
import { rule, getQuestionAndAnswer } from '../games/calc-game.js';
import { runGame } from '../src/index.js';

runGame(rule, getQuestionAndAnswer);
