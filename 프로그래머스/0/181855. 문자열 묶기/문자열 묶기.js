function solution(strArr) {
    let obj = {};
    for(let i = 0 ; i <strArr.length; i++){
        if(obj[strArr[i].length]){
            obj[strArr[i].length]++;
        }else{
            obj[strArr[i].length] = 1;
        }
    }
    return Math.max(...Object.values(obj))
}