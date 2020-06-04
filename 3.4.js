const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

const inputArr = [];

rl.on("line", function (line) {
  inputArr.push(line);

  if (inputArr.length === 2) {
    const n = inputArr[0];
    const arr = inputArr[1]
      .split(" ")
      .map((item) => Number(item))
      .filter((item, index) => {
        return index % 2 !== 0 && item > 0;
      });

    let sum = 0;

    arr.forEach((element) => {
      sum += element;
    });

    console.log(sum);
  }
});
