function solution(arr, idx) {
    let index = 0;
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i]===1)
            index=i;
        if(index>=idx)
        return index;
    }
    return -1;
}