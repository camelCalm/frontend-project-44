import { question } from 'readline-sync';
import randomNum from '../randomNumber.js'
import isEven from '../even.js';

const state = {
    name: '',
    even: '',
    answer: '',
};


export default (name) => {
    state.name = name;
    console.log('Game: "Even"');
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    let i = 0;

    while (i < 3) {
        const number = randomNum();
        state.even = isEven(number);
        console.log(`Question: ${number}`);
        const answer = question('Your answer: ');
        state.answer = answer;

        if (state.even === state.answer) {
            console.log('Correct!');
        } else if (state.even !== state.answer) {
            console.log(
                `'${state.answer}' is wrong answer ;(. Correct answer was '${state.even}'.\nLet's try again, ${state.name}!`
            )
            return;
        }
        i += 1;
    }
    console.log(`Congratulations, ${state.name}!`);
};
