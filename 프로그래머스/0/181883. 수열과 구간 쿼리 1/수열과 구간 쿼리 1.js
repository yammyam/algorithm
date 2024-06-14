function solution(arr, queries) {
    for(let i = 0 ; i < queries.length; i++){
        [a,b] = queries[i];
        for(let j = a ; j<=b ;j++){
            arr[j]++;
        }
    }
    return arr;
}