function solution(rank, attendance) {
    let obj = {};
    let arr = rank.map((i,index)=>{
        if(attendance[index]){
          return i;
        }else{
        return 101;
        }
    })
    for(let i = 0 ; i < arr.length; i++){
        obj[i] = arr[i];
    }
    const entries = Object.entries(obj);
    entries.sort((a, b) => a[1] - b[1]);
    let res = entries.slice(0,3)
    return 10000*Number(res[0][0]) + 100*Number(res[1][0]) + Number(res[2][0]);
}

// function solution(rank, attendance) {
//   const [a, b, c] = rank
//     .map((r, i) => [r, i])
//     .filter(([_, i]) => attendance[i])
//     .sort(([a], [b]) => a - b);
//   return 10000 * a[1] + 100 * b[1] + c[1];
// }