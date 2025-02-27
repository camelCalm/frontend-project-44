// логика: задать вопрос, получить ответ, сравнить ответ
import { question } from "readline-sync";

export default (quest, correctAnswer) => {
    console.log(`Question: ${quest}`);

    const answer = question('Your answer: ');

    if (correctAnswer === answer) {
        return { result: true };
    } else {
        return { result: false, notCorrectAnswer: answer };
    }
};