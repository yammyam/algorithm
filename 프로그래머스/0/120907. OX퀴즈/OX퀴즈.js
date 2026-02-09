const solution = (quiz) =>{
    let arr = quiz.map((item)=> item.split(" "));
    return arr.map((item)=>{
        //const [x,op,y,,z]  = item이렇게 구조분해할당으로도 받아오기가능
        return item[1] === "+" ? 
        Number(item[0])+Number(item[2]) === Number(item[4])? "O":"X" :
        Number(item[0])-Number(item[2]) === Number(item[4])? "O":"X"
    })
}
// *가독성 좋은 풀이
// const solution = (quiz) => {
//   return quiz.map(expr => {
//     const [x, op, y, , z] = expr.split(" ");
//     const result = op === "+" ? Number(x) + Number(y)
//                               : Number(x) - Number(y);
//     return result === Number(z) ? "O" : "X";
//   });
// };


// *아래는 처음내가 푼것
// const solution = (quiz) => {
//     let arr = quiz.map((item)=> item.replace(/ - /g," + -").split(" "));
//     //5 - -15일때 5 - --15로 버그발생!!!!!
//     return arr.map((item)=>{
//         if(Number(item[0])+Number(item[2])===Number(item[4]))
//             return "O"
//         else
//             return "X"
//     })
// }