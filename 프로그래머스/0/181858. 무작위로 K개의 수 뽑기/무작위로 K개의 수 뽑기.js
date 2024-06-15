function solution(arr, k) {
    let res = [];
    for(let i = 0 ; i < arr.length ; i++){
        if(!res.includes(arr[i])){
            res.push(arr[i]);
        }
    }
    if(res.length < k){
        while(res.length !== k){
            res.push(-1);
        }
    }
    if(res.length > k){
        res = res.slice(0,k);
    }

    return res;
}