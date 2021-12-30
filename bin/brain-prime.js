#!/usr/bin/env node
import { rule, getQuestionAndAnswer } from '../games/prime-game.js';
import { runGame } from '../src/index.js';

runGame(rule, getQuestionAndAnswer);
