function solution(arr, queries) {
    let answer = [];
    for(let i = 0 ; i < queries.length ; i++){
        let [a,b,k]= queries[i];
        answer.push(arr.slice(a,b+1).filter((item)=>item>k));
    }
    //answer [[4,3],[4],[]]
    let res = []
for(let j = 0 ; j < answer.length; j++){
    if(answer[j].length !== 0){
        res.push(Math.min(...answer[j]))
    }else{
        res.push(-1)
    }
}
    return res;
}