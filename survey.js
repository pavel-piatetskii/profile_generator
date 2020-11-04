const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const survey = ['What\'s your name? ', 
                'What\'s an activity you like doing? ',
                'What do you listen to while doing that? ',
                'Which meal is your favourite (eg: dinner, brunch, etc.) ',
                'What\'s your favourite thing to eat for that meal? ',
                'Which sport is your absolute favourite? ',
                'What is your superpower? In a few words, tell us what you are amazing at! '];
const answers = [];
let start = 0;

const profile = function() {
  console.log(`${answers[0]} loves listening to ${answers[2]} while ${answers[1]},`+ 
`devouring ${answers[4]} for ${answers[3]}, prefers ${answers[5]} over any other `+
`sport, and is amazing at ${answers[6]}`)
}

const fun = function(question, i) {

  if (i === question.length - 1) {
    return rl.question(question[i], (answer) => {
      answers.push(answer);
      console.log(`Question number ${i} ${answer}`);
      rl.close();
      profile();
    })

  } else {
    rl.question(question[i], (answer) => {
      answers.push(answer);
      console.log(`Question number ${i} ${answer}`)
      i++;
      fun(question, i);
    })
  }
}

fun(survey, start);