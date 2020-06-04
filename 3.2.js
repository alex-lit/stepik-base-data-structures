const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const inputArr = [];

rl.on('line', function(line){
    inputArr.push(line);

    if (inputArr.length === 3) {
        const n = inputArr[0];
        const arr = inputArr[1].split(' ');
        const c = inputArr[2];

        let count = 0;

        arr.forEach(element => {
            if (element === c) count++;
        });


        console.log(count);
    }
});