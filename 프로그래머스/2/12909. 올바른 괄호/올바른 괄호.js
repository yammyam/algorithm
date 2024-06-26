// *** 1
// function check(a, repeat, arr) {
//     for (let i = a; i < a + repeat; i++) {
//         if (arr[i] !== ")")
//             return false;
//     }
//     return true;
// }

// function solution(s) {
//     let arr = s.split("");
//     let repeat = 0;
//     let answer = true;

//     for (let i = 0; i < s.length; i++) {
//         if (arr[i] === "(") {
//             repeat++;
//         } else if (arr[i] === ")") {
//             if (repeat === 0) {
//                 answer = false;
//                 break;
//             }
//             repeat--;
//         }
//     }

//     if (repeat !== 0) {
//         answer = false;
//     }

//     return answer;
// }
// *** 2
// const solution = (s)=>{
//     let stack = [];
//     for(let i = 0 ; i < s.length ; i++){
//         if(s[i] === "("){
//             stack.push("(");
//         }else{
//             if(stack.length === 0)
//                 return false;
//             stack.pop();
//         }
//     }
//     return stack.length === 0;
// }

// *** 3
function solution(s)
{
    let answer = true;
    let count = 0;
    for (let i of s)
    {
        i === '(' ? count++ : count--;
        if (count < 0)
        {
            answer = false;
            break;
        }
    }
    return count !== 0 ? false : answer;
}