import index from '../index.js';
import ranNum from '../randomNumber.js';

export default (name) => {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

    let i = 0;

    const iter = () => {
        if (i === 3) {
            console.log(`Congratulations, ${name}!`);
            return;
        }

        let valRanNum = ranNum();
    
        let arr = [];
        for (let i = valRanNum; i > 0; i -= 1) {
            if (valRanNum % i === 0) {
                arr.push(i);
            }
        }

        let correctAnswer = arr.length === 2 ? 'yes' : 'no';

        let resultOfIndex = index(valRanNum, correctAnswer);

        if (resultOfIndex.result === true) {
            console.log('Correct!');
            i += 1;
            iter();
        } else if (resultOfIndex.result === false) {
            console.log(`'${resultOfIndex.notCorrectAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
            return;
        }
    };

    iter();
};
