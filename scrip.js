const questions = [
    {
        question: "What is JavaScript?",
        options: [
            "Programming Language",
            "Database",
            "Operating System",
            "Browser"
        ],
        answer: "Programming Language"
    },

    {
        question: "Which keyword is used to declare a variable?",
        options: ["print", "let", "display", "write"],
        answer: "let"
    },

    {
        question: "Which method prints output in the console?",
        options: ["console.log()", "print()", "echo()", "write()"],
        answer: "console.log()"
    },

    {
        question: "Which symbol is used for strict equality?",
        options: ["=", "==", "===", "!="],
        answer: "==="
    },

    {
        question: "Which HTML tag is used for JavaScript?",
        options: ["<css>", "<script>", "<js>", "<code>"],
        answer: "<script>"
    }
];
const questionNumber = document.getElementById("question-number");
const questionElement = document.getElementById("question");
const options = document.querySelectorAll(".option");
const nextButton = document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score = 0;
function showQusetion(){
    const currentQuestion = questions[currentQuestionIndex];
    questionNumber.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    questionElement.textContent = currentQuestion.question;
    nextButton.disabled = true;
    options.forEach((button , index ) =>{
        button.textContent = currentQuestion.options[index];
        button.style.backgroundColor = "white";
        button.disabled = false;
    });

}
showQusetion();

options.forEach((button) => {
    button.addEventListener("click", () => {

        const selectedAnswer = button.textContent;
        const correctAnswer = questions[currentQuestionIndex].answer;

        options.forEach(option => {
            option.disabled = true;
        });

        if (selectedAnswer === correctAnswer) {
            button.style.backgroundColor = "lightgreen";
            score++;
        } else {
            button.style.backgroundColor = "lightcoral";

            options.forEach(option => {
                if (option.textContent === correctAnswer) {
                    option.style.backgroundColor = "lightgreen";
                }
            });
        }
        nextButton.disabled = false;

    });
});

nextButton.addEventListener('click', ()=>{
    currentQuestionIndex++;
    if( currentQuestionIndex <questions.length){
        showQusetion();
    }
    else{
        alert(`Quiz Completed! Your Score : ${score} /${questions.length}`);
        location.reload();
    }
});
