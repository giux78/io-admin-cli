// TODO: write you code here

import * as readline from "readline";

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Quanti anni hai?  ", answer => {
  switch (answer.toLowerCase()) {
    case "4":
      console.log("Ciao Saverio");
      break;
    case "41":
      console.log("Ciao Ale");
      break;
    default:
      console.log("Ciao Samuele");
  }
  rl.close();
});
