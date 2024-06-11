function solution(code) {
    let res = "";
    let mode = 0;
    for(let i = 0 ; i < code.length ; i++){
        switch(mode){
            case 0:
                if(code[i] !== "1" && i%2 === 0){
                    res = res + code[i];
                }
                else if(code[i] !== "1" && i%2 !== 0){
                    res = res
                }
                else{
                    mode = 1;
                }
                break;
            case 1:
                if(code[i] !== "1" && i%2 !== 0){
                    res = res + code[i];
                }
                else if(code[i] !=="1" && i%2 === 0){
                    res = res
                }
                else{
                    mode = 0;
                }
                break;
        }
    }   
    if(!res){
        return "EMPTY";
    }
    return res;
}