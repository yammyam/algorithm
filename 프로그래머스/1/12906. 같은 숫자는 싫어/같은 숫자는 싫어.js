const solution = (arr)=> {
    let answer = []
    for(let i of arr)
        if(answer[answer.length-1] !== i)
            answer.push(i)
    return answer;
}