import randomNumber from "../randomNumber.js";
import index from '../index.js';

export default (name) => {
    let i = 0;
    console.log('Find the greatest common divisor of given numbers.');

    const iter = () => {
        if (i === 3) {
            console.log(`Congratulations, ${name}!`);
            return;
        }

        let ranNum1 = randomNumber(100);
        let ranNum2 = randomNumber(100);

        let question = `${ranNum1} ${ranNum2}`;

        let arrOfDiv1 = [];
        let arrOfDiv2 = [];

        for (let i = ranNum1; i > 0; i -= 1) {
            if (ranNum1 % i === 0) {
                arrOfDiv1.push(i);
            }
        }

        for (let i = ranNum2; i > 0; i -= 1) {
            if (ranNum2 % i === 0) {
                arrOfDiv2.push(i);
            }
        }

        arrOfDiv1.sort((a, b) => a - b);
        arrOfDiv2.sort((a, b) => a - b);

        let dupl = [...arrOfDiv1, ...arrOfDiv2].filter((n, i, arr) => arr.indexOf(n) !== i);

        let nod = dupl[dupl.length - 1] + '';

        let returnOfIndex = index(question, nod);

        if (returnOfIndex.result === true) {
            console.log('Correct!');
            i += 1;
            iter()
        } else {
            console.log(`'${returnOfIndex.notCorrectAnswer}' is wrong answer ;(. Correct answer was '${nod}'.\nLet's try again, ${name}!`);
            return;
        }
    };

    return iter();
};
