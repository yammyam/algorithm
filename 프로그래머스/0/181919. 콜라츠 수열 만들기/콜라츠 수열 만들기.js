function solution(n) {
    let res = [n];
    while(n !== 1){
        if(n % 2 === 0){
            n = n/2;
            res.push(n);
        }else{
            n = n*3+1;
            res.push(n);
        }
    }
    return res;
}