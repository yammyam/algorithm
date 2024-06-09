function solution(myString) {
    return myString.split("").map((i)=>{
        if((i >='A' && i <= 'Z') && i.toLowerCase() !== "a"){
            return i.toLowerCase();
        }else if(i.toLowerCase() === "a"){
            return i.toUpperCase();
        }else if(i === " "){
            return i;
        }else{
            return i.toLowerCase();
        }
    }).join("");
}