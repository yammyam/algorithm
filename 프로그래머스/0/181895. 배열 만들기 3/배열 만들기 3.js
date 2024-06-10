function solution(arr, intervals) {
    let [[a,b],[c,d]] = intervals;
    let frontArr = arr.slice(a,b+1);
    let backArr= arr.slice(c,d+1);
    return frontArr.concat(backArr);
}