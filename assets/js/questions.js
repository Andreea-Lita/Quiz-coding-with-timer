//--------------------------------------------------------
/*
const questions = [{
        question: "What's the output of `console.log(5 + '3')`?",
        answers: ["8", "53", "NaN"],
        correctAnswers: [1]
    },
    {
        question: "How do you create a variable in JavaScript?",
        answers: ["var name = 'Alice'", "let name = 'Alice'", "const name = 'Alice'"],
        correctAnswers: [0, 1, 2] // All three are valid
    },
    {
        question: "Which of these is an object method in JavaScript?",
        answers: ["charAt()", "parseInt()", "push()"],
        correctAnswers: [2]
    },
    {
        question: "What's the difference between `==` and `===`?",
        answers: ["One checks for equality, the other for strict equality", "One checks for numbers, the other for strings", "They are the same"],
        correctAnswers: [0]
    },
    {
        question: "What's the purpose of the `this` keyword?",
        answers: ["Refers to the current object", "Refers to the global object", "Refers to the parent function"],
        correctAnswers: [0]
    },
    {
        question: "How do you create an array in JavaScript?",
        answers: ["array = [1, 2, 3]", "array(1, 2, 3)", "new Array(1, 2, 3)"],
        correctAnswers: [0, 2]
    },
    {
        question: "How do you access the first element of an array?",
        answers: ["array[0]", "array.first()", "array.get(0)"],
        correctAnswers: [0]
    },
    {
        question: "What's the difference between a function and an arrow function?",
        answers: ["Arrow functions have shorter syntax", "Arrow functions have different scoping rules", "Arrow functions don't have a `this` keyword"],
        correctAnswers: [0, 2]
    },
    {
        question: "How do you create a conditional statement in JavaScript?",
        answers: ["if (condition) { ... }", "unless (condition) { ... }", "case (condition) { ... }"],
        correctAnswers: [0]
    }
];
*/
var questions = [{
        question: "What's the output of `console.log(10 % 3)`?",
        answers: ["1", "3", "10"],
        // Correct answer: "1"
        correctAnswers: ["1"],
        correctAnswerIndex: [0] //when I work with the index variant
    },
    {
        question: "Which of these is a JavaScript array method to add an element to the end?",
        answers: ["append()", "push()", "add()"],
        // Correct answer: "push()"
        correctAnswers: ["push()"],
        correctAnswerIndex: [1]
    },
    {
        question: "How can you check if a variable is an array in JavaScript?",
        answers: ["typeof variable === 'array'", "isArray(variable)", "variable instanceof Array"],
        // Correct answer: "variable instanceof Array"
        correctAnswers: ["variable instanceof Array"],
        correctAnswerIndex: [2]
    },
    {
        question: "What's the purpose of the `console.log()` function?",
        answers: ["To print output to the console", "To debug code", "Both of the above"],
        // Correct answer: "Both of the above"
        correctAnswers: ["Both of the above"],
        correctAnswerIndex: [2]
    },
    {
        question: "How can you create a template literal in JavaScript?",
        answers: ["`Hello, ${name}`", "'Hello, ' + name", "\"Hello, $name\""],
        // Correct answer: "`Hello, ${name}`"
        correctAnswers: ["`Hello, ${name}`"],
        correctAnswerIndex: [0]
    },
    {
        question: "What's the difference between `break` and `continue` statements in loops?",
        answers: ["Break exits the loop, continue skips to the next iteration", "Break pauses the loop, continue resumes it", "Break stops the code, continue restarts it"],
        // Correct answer: "Break exits the loop, continue skips to the next iteration"
        correctAnswers: ["Break exits the loop, continue skips to the next iteration"],
        correctAnswerIndex: [0]
    },
    {
        question: "How can you create a function that takes multiple arguments?",
        answers: ["function myFunction(arg1, arg2) { ... }", "function myFunction(...args) { ... }", "function myFunction(args[]) { ... }"],
        // Correct answer: "function myFunction(arg1, arg2) { ... }"
        correctAnswers: ["function myFunction(arg1, arg2) { ... }"],
        correctAnswerIndex: [0]
    },
    {
        question: "What's the difference between `var`, `let`, and `const`?",
        answers: ["Var is function-scoped, let and const are block-scoped", "Var can be redeclared, let and const cannot", "All of the above"],
        // Correct answer: "All of the above"
        correctAnswers: ["All of the above"],
        correctAnswerIndex: [2]
    },
    {
        question: "How can you create a new object using object literal syntax?",
        answers: ["const obj = new Object();", "const obj = {};", "const obj = Object();"],
        // Correct answer: "const obj = {};"
        correctAnswers: ["const obj ={};"],
        correctAnswerIndex: [1]
    }
];

var questionContainer = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var choicesContainer = document.getElementById("choices");

var currentQuestionIndex = 0;
var score = 0;
var totalQuestions = questions.length;

function startQuiz() {
    questionContainer.classList.remove("hide");
    displayQuestion(currentQuestionIndex);

}

function displayQuestion(index) {
    const question = questions[index];
    questionTitle.textContent = question.question;

    choicesContainer.innerHTML = ""; // Clear previous choices

    // question.answers.forEach((answer, answerIndex) => {//when I use indexes, not correct answers as strings!
    question.answers.forEach(answer => {
        const choiceButton = document.createElement("button");
        choiceButton.textContent = answer;
        choiceButton.addEventListener("click", handleAnswerSelection);
        //  handleAnswerSelection(answerIndex, index);
        //when I use correct answers as strings, not indexes!

        choicesContainer.appendChild(choiceButton);
    });
}


// function handleAnswerSelection(selectedAnswerIndex, questionIndex) {//when I worked with the index correct answers(correctAnswerIndex)
function handleAnswerSelection() {
    //     const isCorrect = questions[questionIndex].correctAnswerIndex.includes(selectedAnswerIndex);
    var selectedAnswer = this.textContent;
    var isCorrect = questions[currentQuestionIndex].correctAnswers.includes(selectedAnswer);

    // Provide feedback (e.g., highlight correct/incorrect choices)
    if (isCorrect) {
        score++;
        console.log("Correct answer and your score:", score, "from", totalQuestions);
    } else {
        console.log("incorrect answer!!");
        // durationRemaining -= 10;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < totalQuestions) {
        displayQuestion(currentQuestionIndex);
    } else {
        console.log("Quiz finished!!!")
    }
    //var counter = 0;
    //counter.textContents = durationRemaining;
}

// function displayResults() {
// Show final score and any other feedback
// Implement this function based on your desired results display logic
// }

// Start the quiz by calling the startQuiz function
startQuiz();