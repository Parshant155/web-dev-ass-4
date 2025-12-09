let quiz = [
    { question: "What is the capital of India?", answer: "delhi" },
    { question: "What planet is known as the Red Planet?", answer: "mars" },
    { question: "What is 2 + 2?", answer: "4" }
];


let score = 0;

for (let i = 0; i < quiz.length; i++) {


    let userAnswer = prompt(quiz[i].question);


    if (!userAnswer) {
        alert("You didn't enter anything!");
        continue;
    }


    userAnswer = userAnswer.toLowerCase().trim();


    if (userAnswer === quiz[i].answer) {
        alert("Correct!");
        score++; 
    } else {
        alert("Wrong! The correct answer is: " + quiz[i].answer);
    }
}


alert("Quiz finished! Your final score is: " + score + "/" + quiz.length);
