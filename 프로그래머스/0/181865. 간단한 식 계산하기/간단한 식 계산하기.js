function solution(binomial) {
    let op = ""
    let arr = binomial.split(" ");
    for(let i = 0 ; i < arr.length ; i++){
        if(isNaN(arr[i])){
            op = arr[i];
        }
    }
    switch(op){
        case ("+"):
            return (Number(arr[0])+Number(arr[2]));
        case ("-"):
            return (Number(arr[0])-Number(arr[2]));
        case ("*"):
            return (Number(arr[0])*Number(arr[2]));
    }
}
// const ops = {
//   '+': (a, b) => a + b,
//   '-': (a, b) => a - b,
//   '*': (a, b) => a * b,
// };

// function solution(binomial) {
//   const [a, op, b] = binomial.split(' ');
//   return ops[op](+a, +b);
// }
