function solution(arr) {
    let leng = arr.length;
    if(leng === 1){
        return arr;
    }
    let count = 0;
    let num = 0 ;
    while(leng > 2**count ){
        count++;
    }
    for(let i = 0 ; i<2**count-leng;i++){
        arr.push(0);
    }
    return arr;
}