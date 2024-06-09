function solution(arr) {
    let init = 0;
    let sum = arr.reduce((a,c)=>a+c,init)
    let res = []
    for(let i = 0; i < arr.length; i++){
        for(let j = 1 ; j <= arr[i] ; j++){
            res.push(arr[i]);
        }        
    }
    return res;
}