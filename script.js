
const correctAnswers = {
    q1: "b",
    q2: "c",
    q3: "a"
};

const checkButton = document.getElementById("checkAnswers");
const quizResult = document.getElementById("quizResult");

checkButton.addEventListener("click", function () {

    let score = 0;
    let feedback = "";

    for (const question in correctAnswers) {

        const selectedAnswer = document.querySelector(
            `input[name="${question}"]:checked`
        );

        if (!selectedAnswer) {
            quizResult.textContent = "Please answer all three questions.";
            return;
        }

        if (selectedAnswer.value === correctAnswers[question]) {
            score++;

            feedback += `
                <p class="correct">✓ ${question.toUpperCase()}: Correct!</p>
            `;
        } else {
            feedback += `
                <p class="incorrect">✗ ${question.toUpperCase()}: Incorrect.</p>
            `;
        }
    }

    quizResult.innerHTML = `
        <h2>Your Score: ${score}/3</h2>
        ${feedback}
    `;
});
