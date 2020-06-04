const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const inputArr = [];

rl.on('line', function(line){
    inputArr.push(line);

    if (inputArr.length === 2) {
        const n = inputArr[0];
        const arr = inputArr[1].split(' ').map(item=>Number(item));

        let sum = 0;

        arr.forEach(element => {
            if (element > 0 && element%2 === 0) sum += element;
        });

        console.log(sum);
    }
});