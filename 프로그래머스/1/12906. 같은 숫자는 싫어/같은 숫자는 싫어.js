const solution = (arr)=>{
    let answer = [arr[0]];
    for(let i = 1 ; i < arr.length ; i++){
        if(!answer.includes(arr[i])||arr[i-1] !== arr[i]){
            answer.push(arr[i]);
        }
    }
    return answer;
}