import { question } from 'readline-sync';
import even from './games/brain-even.js'
import calc from './games/brain-calc.js';
import gcd from './games/brain-gcd.js';
import cli from './cli.js';

export default () => {
    const name = cli();

    console.log('What is a game do you want to play? [even/calc/gcd/progression/prime]');
    const game = question(`Your answer: `);

    switch (game) {
        case 'even':
            return even(name);
        case 'calc':
            return calc(name);
        case 'gcd':
            return gcd(name);
        default:
            console.log('Missing from the list');
    }
};