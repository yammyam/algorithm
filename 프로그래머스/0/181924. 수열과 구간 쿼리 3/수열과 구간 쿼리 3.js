function solution(arr, queries) {
    for(let i = 0 ; i < queries.length; i++){
            let index1 = queries[i][0]; 
            let index2 = queries[i][1];
            [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    }
    return arr;
}