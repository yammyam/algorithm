function solution(n, control) {
    var answer = 0;
    for(let i = 0; i < control.length; i++){
        if(control[i]==="w"){
            answer += 1;
        }
        else if (control[i]==="s"){
            answer -= 1;
        }
        else if(control[i]==="d"){
            answer += 10;
        }
        else{
            answer -= 10;
        }
    }
    return answer+n;
}