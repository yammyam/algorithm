const solution = (n) => {
    let k = Math.floor(n/2);// 5.5 -> 5 
    return k*(k+1);
}
//짝수의 합 공식 2+4+ ... + 2K = K(K+1)