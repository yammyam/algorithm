function solution(arr1, arr2) {
    let init = 0;
    let sum1 = arr1.reduce((a,c)=>a+c,init)
    let sum2 = arr2.reduce((a,c)=>a+c,init)
    let b1 = sum1>sum2;//ture면 1
    let b2 = sum1<sum2;//treu면 -1
    let b3 = sum1===sum2;//0
    if(arr1.length > arr2.length){
        return 1;
    }
    else if(arr1.length < arr2.length){
        return -1;
    }
    else {
        return b1 ? 1: (b2 ? -1 : 0);
    }
}