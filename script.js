
const correctAnswers = {
    q1: {
        value: "b",
        text: "A cyberattack used to steal personal information"
    },
    q2: {
        value: "c",
        text: "Avoid clicking links and verify the sender"
    },
    q3: {
        value: "a",
        text: "An unexpected message asking for your password"
    }
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

        if (selectedAnswer.value === correctAnswers[question].value) {
            score++;

            feedback += `
                <p class="correct">
                    ✓ ${question.toUpperCase()}: Correct!
                </p>
            `;
        } else {
            feedback += `
                <p class="incorrect">
                    ✗ ${question.toUpperCase()}: Incorrect.
                    <br>
                    Correct answer: ${correctAnswers[question].text}
                </p>
            `;
        }
    }

    quizResult.innerHTML = `
        <h2>Your Score: ${score}/3</h2>
        ${feedback}
    `;
});
