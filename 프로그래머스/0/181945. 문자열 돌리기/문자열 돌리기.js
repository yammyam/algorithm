const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let str =""
rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input.join("");
    for(let i = 0; i<str.length; i++){
        console.log(str[i]);
    }
});