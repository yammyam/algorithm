function solution(q, r, code) {
    return code.split("").map((i,index)=>{
        if(index%q===r){
            return i;
        }else{
            return ""
        }
    }).join("")
}