function solution(intStrs, k, s, l) {
    let res = [];
    for(let i = 0 ; i<intStrs.length; i++){
        res.push(Number(intStrs[i].slice(s,s+l)));
    }
    return res.filter((i)=>i>k);
}