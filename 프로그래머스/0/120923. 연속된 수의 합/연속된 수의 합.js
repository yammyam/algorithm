function solution(num, total) {
    let start = (total - ((num*(num-1))/2))/num;
    return Array.from({length: num},(_,i)=>start+i)
}