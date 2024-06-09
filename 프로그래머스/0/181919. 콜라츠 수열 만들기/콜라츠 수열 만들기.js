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
//재귀함수
// function solution(n, arr = []) {
//     arr.push(n)
//     if (n === 1) return arr
//     if (n % 2 === 0) return solution(n / 2, arr)
//     return solution(3 * n + 1, arr)
// }