function solution(my_string, m, c) {
    return [...my_string].filter((item,i)=>i%m === c-1).join("")
}