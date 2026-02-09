const solution = (num, total) => {
    // 시작값의 공식을 세우기 1~n까지의 합 등차수열 합공식과 수를 쭉써서 덧셈이 어떻게표현되는지 통해 구함
    let start = (total - ((num*(num-1))/2))/num;
    return Array.from({length: num},(_,i)=>start+i)
}