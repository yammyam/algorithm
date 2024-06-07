function solution(arr, k) {
    if(k%2!==0){
        return arr.map((i)=>{return i*k})
    }else{
        return arr.map((i)=>{return i+k})
    }
}