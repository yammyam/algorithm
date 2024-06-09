function solution(myString) {
    
    let answer = myString.split("").map((i)=>{
        if(i.charCodeAt()>=97 && i.charCodeAt()<=108){
            return "l";
        }else{
            return i;
        }
    })
    return answer.join("");
}