const readline = require("readline");

const questions = {
  0: "What's your name? Nicknames are also acceptable :)",
  1: "What's an activity you like doing?",
  2: "What do you listen to while doing that?",
  3: "Which meal is your favourite (eg: dinner, brunch, etc.)",
  4: "What's your favourite thing to eat for that meal?",
  5: "Which sport is your absolute favourite?",
  6: "What is your superpower? In a few words, tell us what you are amazing at!",
};

const answers = {
  0: "",
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: "",
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// let i = 0;

const questionPrompt = function () {
  // recursive solution
  // if (i < 7) {
  //   rl.question(`${questions[i]}\n`, (answer) => {
  //     answers[i] = answer;
  //     i++;
  //     question();
  //   });
  // } else {
  rl.question(`${questions[0]}\n`, (answer1) => {
    answers[0] = answer1;
    console.log(`Thank you for your valuable feedback: ${answer1}`);
    rl.question(`${questions[1]}\n`, (answer2) => {
      answers[1] = answer2;
      rl.question(`${questions[2]}\n`, (answer3) => {
        answers[2] = answer3;
        rl.question(`${questions[3]}\n`, (answer4) => {
          answers[3] = answer4;
          rl.question(`${questions[4]}\n`, (answer5) => {
            answers[4] = answer5;
            rl.question(`${questions[5]}\n`, (answer6) => {
              answers[5] = answer6;
              rl.question(`${questions[6]}\n`, (answer7) => {
                answers[6] = answer7;
                rl.close();
                console.log("Your Profile:");
                setTimeout(
                  () =>
                    console.log(` This Profile is about ${answers[0]} and they like to ${answers[1]} while listening to ${answers[2]}. ${answers[0]}'s favorite meal time is ${answers[3]} and likes eating ${answers[4]} for it. Their favorite sport is ${answers[5]}. When asked what their superpower is ${answers[0]} said: ${answers[6]}
                  `),
                  1000
                );
              });
            });
          });
        });
      });
    });
  });
  // }
};

questionPrompt();
