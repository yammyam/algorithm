// function check(a,repeat, arr){
//     for(let i = a ; i < repeat ;i++){//2~3
//         if(arr[i] !== ")")
//             return false;
//     }
//     return true;
// }
// function solution(s){
//     let arr = s.split("");
//     let repeat = 1;
//     let answer = true;
//     for(let i = 1 ; i < s.length; i++){
//         if(arr[i-1] === "(" && arr[i] === ")"){
//             answer = check(i,i+repeat,arr)
//         }else
//             repeat++;
//         repeat = 1;
//     }
//     return answer;
// }
function check(a, repeat, arr) {
    for (let i = a; i < a + repeat; i++) {
        if (arr[i] !== ")")
            return false;
    }
    return true;
}

function solution(s) {
    let arr = s.split("");
    let repeat = 0; // 반복 횟수 초기화
    let answer = true;

    for (let i = 0; i < s.length; i++) {
        if (arr[i] === "(") {
            repeat++; // 여는 괄호의 개수를 증가
        } else if (arr[i] === ")") {
            if (repeat === 0) { // 여는 괄호가 없는 상태에서 닫는 괄호가 나올 경우
                answer = false;
                break;
            }
            repeat--; // 여는 괄호의 개수를 감소
        }
    }

    if (repeat !== 0) { // 모든 반복이 끝난 후 여는 괄호가 남아 있는 경우
        answer = false;
    }

    return answer;
}
