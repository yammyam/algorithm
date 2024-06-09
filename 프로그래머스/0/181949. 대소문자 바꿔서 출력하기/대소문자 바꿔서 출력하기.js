const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let res = "";

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    let str = input.join("");
    for(let i = 0 ;  i < str.length; i++){
        if(str[i] === str[i].toLowerCase() ){
                res += str[i].toUpperCase()
        }else{
            res += str[i].toLowerCase()
        }
    }
    console.log(res);
});