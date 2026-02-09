const solution = (quiz) =>{
    let arr = quiz.map((item)=> item.split(" "));
    return arr.map((item)=>{
        return item[1] === "+" ? 
        Number(item[0])+Number(item[2]) === Number(item[4])? "O":"X" :
        Number(item[0])-Number(item[2]) === Number(item[4])? "O":"X"
    })
}
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