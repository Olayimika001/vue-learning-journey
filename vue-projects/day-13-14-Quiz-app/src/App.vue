<template>
  <div class="container">
    <h1>Quiz App</h1>
    <div class="quiz">
      <div class="questions" v-if="!quizCompleted">
        <h3>{{ currentQuestion.question }}</h3>

        <div
          class="option"
          :class="{
            wrong:
              currentQuestionAnswered &&
              userAnswers[currentQuestion.id] === option &&
              option !== currentQuestion.correctAnswer,
            correct:
              currentQuestionAnswered &&
              option === currentQuestion.correctAnswer,
          }"
          v-for="option in currentQuestion.options"
          :key="option"
        >
          <input
            type="radio"
            :name="'question' + currentQuestion.id"
            :value="option"
            v-model="userAnswers[currentQuestion.id]"
          />
          <label>{{ option }}</label>
        </div>
        <button v-if="currentQuestionAnswered" @click="nextQuestion">
          {{
            currentQuestionIndex === questions.length - 1 ? "Submit" : "Next"
          }}
        </button>
      </div>

      <!-- Results Section -->
      <div class="results" v-if="quizCompleted">
        <h2>Quiz Complete! 🎉</h2>

        <div class="score-display">
          <h3>Your Score: {{ score }} / {{ questions.length }}</h3>
          <p class="percentage">{{ percentage }}%</p>
        </div>

        <!-- Pass/Fail Feedback -->
        <div v-if="hasPassed" class="feedback pass">
          <h3>🎉 Congratulations! You Passed!</h3>
          <p>Great job! You scored {{ percentage }}%</p>
        </div>

        <div v-else class="feedback fail">
          <h3>😞 You Failed</h3>
          <p>You scored {{ percentage }}%. You need 70% to pass. Try again!</p>
        </div>

        <!-- Restart Button -->
        <button @click="restartQuiz" class="restart-btn">Restart Quiz</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const questions = ref([
  {
    id: 0,
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    id: 1,
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
    ],
    correctAnswer: "Hyper Text Markup Language",
  },
  {
    id: 2,
    question: "What is 12 × 8?",
    options: ["84", "96", "102", "88"],
    correctAnswer: "96",
  },
  {
    id: 3,
    question: "What is H2O?",
    options: ["Oxygen", "Hydrogen", "Water", "Carbon Dioxide"],
    correctAnswer: "Water",
  },
  {
    id: 4,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    id: 5,
    question: "What color do you get when you mix blue and yellow?",
    options: ["Purple", "Green", "Orange", "Red"],
    correctAnswer: "Green",
  },
]);

const currentQuestionIndex = ref(0);

const quizCompleted = ref(false);

const userAnswers = ref({});

const nextQuestion = () => {
  if (currentQuestionIndex.value < questions.value.length - 1) {
    currentQuestionIndex.value++;
  } else {
    quizCompleted.value = true;
  }
};

const score = computed(() => {
  let correctCount = 0;

  questions.value.forEach((question) => {
    if (userAnswers.value[question.id] === question.correctAnswer) {
      correctCount++;
    }
  });
  return correctCount;
});

const percentage = computed(() => {
  return Math.round((score.value / questions.value.length) * 100);
});

const hasPassed = computed(() => {
  return percentage.value >= 70;
});

const restartQuiz = () => {
  userAnswers.value = {};
  currentQuestionIndex.value = 0;
  quizCompleted.value = false;
};

const currentQuestion = computed(() => {
  return questions.value[currentQuestionIndex.value];
});

const currentQuestionAnswered = computed(() => {
  return (
    userAnswers.value[questions.value[currentQuestionIndex.value].id] !==
    undefined
  );
});
</script>

<style scoped>
.container {
  width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  color: #333;
}

h1 {
  text-align: center;
  margin-bottom: 10px;
  font-size: 2rem;
  font-weight: bold;
  color: #4caf50;
}

.questions {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #fff;
}

h3 {
  margin-bottom: 10px;
  font-size: 1.2rem;
  color: #555;
}

.option {
  background: white;
  border: 2px solid #ddd;
  padding: 12px;
  margin: 8px 0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.option:hover {
  border-color: #999;
}

.option.selected {
  border-color: blue;
}

.option.wrong {
  background-color: #ffebee;
  border-color: #f44336;
  color: #c62828;
}

.option.correct {
  background-color: #e8f5e9;
  border-color: #4caf50;
  color: #2e7d32;
}

label {
  margin-left: 8px;
  font-size: 1rem;
  color: #666;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;
}

.results {
  margin-top: 40px;
  padding: 30px;
  border-radius: 15px;
  background-color: #f5f5f5;
  text-align: center;
}

.score-display {
  margin: 20px 0;
}

.percentage {
  font-size: 48px;
  font-weight: bold;
  color: #4caf50;
  margin: 10px 0;
}

.feedback {
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
}

.feedback.pass {
  background-color: #d4edda;
  border: 2px solid #28a745;
  color: #155724;
}

.feedback.fail {
  background-color: #f8d7da;
  border: 2px solid #dc3545;
  color: #721c24;
}

.restart-btn {
  padding: 12px 30px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;
}

.restart-btn:hover {
  background-color: #0056b3;
}
</style>