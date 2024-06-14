function solution(myStr) {
    let arr = myStr.split("").map((i)=>{
        if(i==="a"||i==="b"||i==="c"){
            return "";
        }else{
        return i;
        }})
    let resultArray = [];
    let currentWord = '';

    for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== '') {
        currentWord += arr[i];
    } else {
        if (currentWord !== '') {
            resultArray.push(currentWord);
            currentWord = '';
        }
    }
}

// 마지막에 남은 문자열 처리
if (currentWord !== '') {
    resultArray.push(currentWord);
}
    if(resultArray.length === 0){
        return["EMPTY"];
    }else{
        return resultArray;
    }
}