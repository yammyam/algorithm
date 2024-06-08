function solution(arr, n) {
    //0짝수취급
    let answer = [];
    if(arr.length % 2 !== 0 ){
        answer = arr.map((item,index)=>{
            if(index % 2 === 0){
                return item + n;
            }
            else{
                return item;
            }
        })
    }else{
        answer =  arr.map((item, index)=>{
            if(index % 2 !== 0){
                return item + n;
            }
            else{
                return item;
            }
        })
    }
    return answer;
}