const startButtonEl = document.getElementById('start');
const pressBtnEl = document.getElementById('pressBtn');
const questionListEl = document.getElementById('questions');
const selectEl = document.getElementById('select');
const finishedEl = document.getElementById('finished');
const finalEl = document.getElementById('final');
const initialsEl = document.getElementById('initials');
const submitEl = document.getElementById('submit');

let currentQuestionIndex = 0;
let score = 0;

var questionBank =  [
  {
      question: 'Which of the following is a valid HTML tag to create a hyperlink?',
      choices:['<link>', '<img>', '<a>','<h1>'],
      answers:'<a>',
  },
  
  
      {
      question:'How do you create a new CSS file and link it to an HTML document?',
      choices:['Use the <style> tag to create a new CSS file','Use the <link> tag to create a new CSS file','Use the <script> tag to create a new CSS file','You cant create a new CSS file, you have to use an existing one'],
      answers:'Use the <link> tag to create a new CSS file ',
  },
  
      {
      question:'What is the purpose of JavaScript?',
      choices:['To style web pages','To create web page layouts','To add interactivity to web pages','To display images on web pages'],
      answers:'To add interactivity to web pages',
  },
  
      {
      question:'Which of the following is an example of a JavaScript event?',
      choices:['mouseover','<p> tag','CSS class','HTML attribute'],
      answers:'mouseover',
  },
  
      {
      question:'What is the correct syntax for a JavaScript function?',
      choices:['function:myFunction()','function myFunction()',' myFunction(function)','myFunction: function()'],
      answers:'function myFunction()',
  },
  ];


const startQuiz = () => {
  startButtonEl.setAttribute('class', 'hide');
  pressBtnEl.setAttribute('class', 'hide');
  questionListEl.removeAttribute('class', 'hide');
  getQuestion();
  
};


function getQuestion() {
  if (currentQuestionIndex >= questionBank.length) {
    questionListEl.setAttribute('class');
    finishedEl.removeAttribute('class');
    finalEl.textContent = `Your final score is ${score}.`;
    return;
  }
  
  // display questions 
  const currentQuestion = questionBank[currentQuestionIndex];
  selectEl.textContent = currentQuestion.question;
  for (let i = 0; i < currentQuestion.choices.length; i++) {
    const choice = currentQuestion.choices[i];
    const button = document.createElement('button');
    button.textContent = choice;
    button.addEventListener('click', () => {
      if (choice === currentQuestion.answers) {
        score++;
      }
      currentQuestionIndex++;
      getQuestion();
    });
    selectEl.appendChild(button);
  }
}

startButtonEl.addEventListener('click', () => {
  console.log('The "press" button was clicked!');
  startQuiz();
});
