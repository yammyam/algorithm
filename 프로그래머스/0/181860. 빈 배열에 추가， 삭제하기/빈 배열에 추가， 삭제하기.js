function solution(arr, flag) {
    let res = [];
    for(let i = 0 ; i < flag.length; i++){
        if(flag[i]){
            for(let j = 0; j < arr[i]*2 ; j ++){
                res.push(arr[i]);
            }
        }else{
            res = res.slice(0,res.length-arr[i])
        }
    }
    return res;
}