function solution(l, r) {
    var answer = [];
    for(let i = l ; i<=r ;i++){
        if(i%5 === 0 ){
            answer.push(i);
        }
    }
    answer = answer.filter((i)=>/^[05]+$/.test(String(i)))
    if(answer.length){
        return answer
    }else{
        return [-1];
    }
}