function solution(progresses, speeds) {
    let arr = progresses.map((i,index)=>{
        if((100-i)/speeds[index] === Math.floor((100-i)/speeds[index]))
            return (100-i)/speeds[index]
        else
            return Math.ceil((100-i)/speeds[index]);
    })
    let answer = [arr[0]];
    for(let i = 1 ; i<arr.length ; i++){
        if(arr[i-1]>arr[i]){
            arr[i] = arr[i-1];
        }
        answer.push(arr[i]);
    }
    let counts = answer.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});

    let result = Object.keys(counts).sort((a, b) => a - b).map(key => counts[key]);
    return result;
}