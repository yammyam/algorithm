function solution(my_string, indices) {
    var answer = '';
    return my_string.split("").filter((i,index)=>!indices.includes(index)).join("")
}