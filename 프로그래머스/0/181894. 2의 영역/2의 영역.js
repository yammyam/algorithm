function solution(arr) {
    let res = [];
    let start = arr.indexOf(2);
    let end = arr.lastIndexOf(2);
    if(start === -1)
        res.push(-1);
    else if(start !== -1 && end !== -1){
        for(let i = start; i<=end; i++){
            res.push(arr[i]);
        }
    }else{
        res.push(2);
    }
        
    return res;
    // start === -1 ? [-1] : arr.slice(start,end+1);
}