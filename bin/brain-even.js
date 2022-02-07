#!/usr/bin/env node
import { rule, getQuestionAndAnswer } from '../src/games/even-game.js';
import { runGame } from '../src/index.js';

runGame(rule, getQuestionAndAnswer);
