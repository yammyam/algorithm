function solution(my_string) {
    return my_string.split(" ").filter((i)=>{if(i!==""){return i}});
}