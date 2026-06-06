// Quiz App

const questions = [{
  question: "What does JS stands for ?",
  options: ["JavaSon","JavaScript","Java","None"],
  answer: 1
},
{
  question: "Which programming language runs in browser?",
  options: ["Java","Python","JavaScript","C#"],
  answer: 2
},
{
  question: "In Python Which symbol is used for comments?",
  options: ["/","//","#","none"],
  answer: 2
},
{
  question:"What's My Favourite hobby?",
  options: ["Cooking","Reading","Studying Physics","Coding"],
  answer: 3
}];

let currentIndex = 0;
let score = 0;
let locked = false;

const questionEl= document.getElementById("question");
const options = document.querySelector(".options");
const button = document.getElementById("nextBtn");

function loadQuestion() {
  const q = questions[currentIndex];

  // show question
  questionEl.innerText = q.question; // had an bug here

  // clear old options
  options.innerHTML = "";

  // Create new options 
  q.options.forEach((option,index) => {
    const btn = document.createElement("button");
    btn.innerText = option;

    btn.addEventListener("click", () => {
      if(locked) return;
      locked = true;
      if (index === q.answer) {
        score++;
        btn.style.background = "green";
      } else {
        btn.style.background = "red";
      }
    });
    options.appendChild(btn);
  });
}

button.addEventListener("click", () => {
  currentIndex++;

  if(currentIndex < questions.length) {
    loadQuestion();
  } else {
    questionEl.innerText = ` Quiz Finished! Score : ${score}/ ${questions.length}`;
    options.innerHTML = "";
    button.style.display = "none";
  }
});

loadQuestion();
