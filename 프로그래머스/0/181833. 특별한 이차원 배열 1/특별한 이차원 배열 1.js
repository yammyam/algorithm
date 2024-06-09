function solution(n) {
    if( n === 1 )
        return [[n]];
    let arr = [];
    for( let i = 0 ; i < n ; i++ ){
            arr[i] = new Array(n).fill(0);
    }
    for(let j = 0 ; j < n ; j++){
        arr[j][j] = 1;
    }
    return arr;
}