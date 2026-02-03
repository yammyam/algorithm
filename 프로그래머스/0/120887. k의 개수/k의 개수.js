const solution = (i, j, k) => {
    return Array.from({length:j-i+1},(_,x)=>x+i).map((item)=>String(item).split("")).flat()
    .filter((one)=>one===String(k)).length
    //Array.from({length: j - i + 1}, (_, x) => x + i) 
    // .map(String(item))
    // .join("") // 문자열 하나로 합치기
    // .split("") // 각 자리로 나누기
    // .filter(c => c === String(k))
    // .length;
}