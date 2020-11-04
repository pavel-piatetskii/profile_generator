const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profileMaker = {
  questions:  [
               'What\'s your name? ', 
               'What\'s an activity you like doing? ',
               'What do you listen to while doing that? ',
               'Which meal is your favourite (eg: dinner, brunch, etc.) ',
               'What\'s your favourite thing to eat for that meal? ',
               'Which sport is your absolute favourite? ',
               'What is your superpower? In a few words, tell us what you are amazing at! '
              ],
    answers:  [
               'name', 'activity', 'music', 'meal', 'food', 'sport', 'superpower'
              ],
printResult:  function() {console.log(`${this.name} loves listening to ${this.music} ` +
                `while ${this.activity}, devouring ${this.food} for ${this.meal}, ` +
                `prefers ${this.sport} over any other sport, and is ` +
                `amazing at ${this.superpower}.`)},
          i:  0
};

const surveyHandler = function(data) {

  rl.question(data.questions[data.i], (answer) => { 
    data[ data.answers[data.i] ] = answer;

    if (data.i === data.questions.length - 1) { 
      rl.close()
      data.printResult();

    } else {
      data.i++;
      surveyHandler(data);
    }
  })
}

surveyHandler(profileMaker);