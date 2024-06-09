const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');//배열 들어올때 문자열 취급인듯
}).on('close', function () {
    let sum = Number(input[0]) + Number(input[1])
    console.log(`${input[0]} + ${input[1]} = ${sum}`);
});