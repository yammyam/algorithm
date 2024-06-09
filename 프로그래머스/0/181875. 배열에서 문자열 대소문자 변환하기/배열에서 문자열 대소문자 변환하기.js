function solution(strArr) {
    return strArr.map((i,index)=>{
        if(index%2 === 0){
            return i.toLowerCase();
        }else
            return i.toUpperCase();
    });
}