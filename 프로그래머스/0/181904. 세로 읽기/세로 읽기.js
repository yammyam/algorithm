function solution(my_string, m, c) {
    let answer = [];
    let str = ""
    for(let i = 0 ; i< my_string.length ; i++){
        if(i%m !== 0 || i === 0)
            str += my_string[i];
        else{
            str += " "+my_string[i];
        }
    }
    return str.split(" ").map((item)=>item[c-1]).join("")
}