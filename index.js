const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your age?\n", (answer) => {
  console.log(`you recorded your age as ${answer}`);
  rl.close();
});
