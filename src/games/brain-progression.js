import randomNumber from '../randomNumber.js';
import ranReasNum from '../randomReasonNumber.js';
import index from '../index.js';

export default (name) => {
    console.log('What number is missing in the progression?');
    let i = 0;

    let iter = () => {
        if (i === 3) {
            console.log(`Congratulations, ${name}!`);
            return;
        }

        let min = 5;
        let max = 10;
        let factor = 15;
        let ranNum = randomNumber(factor)
        let count = ranReasNum(min, max);
        let res = [];
        res.push(ranNum);

        for (let i = 0; i < count; i += 1) {
            res.push(res[res.length - 1] + ranNum);
        }

        let indexHideNum = ranReasNum(0, count);
        let valueHideNum = res[indexHideNum];
        res.splice(indexHideNum, 1, "' '");

        let question = res.join(' ');
        let answer = valueHideNum + '';

        let answerOfIndex = index(question, answer);

        if (answerOfIndex.result === true) {
            console.log('Correct!');
            i += 1;
            return iter();
        } else {
            console.log(`'${answerOfIndex.notCorrectAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!`);
            return;
        }
    };

    return iter ();
};
