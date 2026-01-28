const solution = (s1, s2) => {
    // let obj = {};
    // for(let i of s1){
    //     if(s2.includes(i))
    //        obj[i] = (obj[i]|| 1)
    // }
    // return Object.keys(obj).length
    // 위는 해시처럼 보이나 시간복잡도가 n*n
    let set  = new Set(s1);
    let answer = 0;
    for(let i of s2)
        if(set.has(i))
            answer++;
    return answer;
    // set은 내부적으로 해시 테이블 구조이기때문에 위치바로찾기가 가능 => 해시알고리즘
}