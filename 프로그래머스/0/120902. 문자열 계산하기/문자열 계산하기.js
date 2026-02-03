const solution = (my_string) =>{
    return my_string.replace(/ - /g," + -").split(" + ").reduce((a,c)=>a+Number(c),0)
}
// const solution = (my_string) => {
//     let code = my_string.split(" ")
//     let answer = Number(code[0])
//     for(let i = 1; i<code.length;i++){
//         if(code[i]==="+"){
//             answer += Number(code[i+1])
//         }
//         else if(code[i]==="-"){
//             answer -= Number(code[i+1])
//         }
//     }
//     return answer;
// }