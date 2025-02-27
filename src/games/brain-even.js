import randomNum from '../randomNumber.js'
import index from '../index.js';
import isEven from '../even.js';

export default (name) => {
    console.log('Game: "Even"');
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    let i = 0;

    const iter = () => {
        if (i === 3) {
            console.log(`Congratulations, ${name}!`);
            return;
        }

        const randomNumber = randomNum();
        let resultOfEven = isEven(randomNumber);

        let resultOfIndex = index(randomNumber, resultOfEven);

        if (resultOfIndex.result === true) {
            console.log('Correct!');
            i += 1;
            iter ()
        } else if (resultOfIndex.result === false) {
            console.log(
                `'${resultOfIndex.notCorrectAnswer}' is wrong answer ;(. Correct answer was '${resultOfEven}'.\nLet's try again, ${name}!`
            );
            return;
        }     
    };

    iter();
};
