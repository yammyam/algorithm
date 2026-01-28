function solution(my_string) {
    let m = "aeiou"
    return [...my_string].filter((item)=>!m.includes(item)).join("")
}