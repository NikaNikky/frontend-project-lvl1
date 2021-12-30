#!/usr/bin/env node
import { rule, getQuestionAndAnswer } from '../games/progression-game.js';
import { runGame } from '../src/index.js';

runGame(rule, getQuestionAndAnswer);
