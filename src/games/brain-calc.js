import randomNum from "../randomNumber.js";
import randomSign from "../randomSign.js";
import index from '../index.js';

let getCorrectAnswer = {
    '-': (a, b) => a - b,
    '+': (a, b) => a + b,
    '*': (a, b) => a * b,
};

export default (name) => {
    let i = 0;
    console.log('What is the result of the expression?');
    
    let iter = () => {
        if (i === 3) {
            console.log(`Congratulations, ${name}!`);
            return;
        }

        let num1 = randomNum();
        let num2 = randomNum();
        let sign = randomSign();
        let correctAnswer = getCorrectAnswer[sign](num1, num2) + '';
        let question = `${num1} ${sign} ${num2}`;
        let resultOfIndex = index(question, correctAnswer);

        if (resultOfIndex.result === true) {
            console.log('Correct!');
            i += 1;
            iter();
        } else if (resultOfIndex.result === false) {
            console.log(
                `'${resultOfIndex.answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`
            )
            return;
        }
    };

    iter();
};
