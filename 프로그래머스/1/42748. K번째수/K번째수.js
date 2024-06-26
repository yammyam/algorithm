function solution(array, commands) {
    let answer = [];
    for(let w = 0 ; w < commands.length; w++){
        let [i,j,k] = commands[w];
        answer.push(array.slice(i-1,j).sort((a,b)=>a-b)[k-1]);
    }
    return answer;
}