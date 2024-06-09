function solution(myString, pat) {
    if(myString.toLowerCase().includes(pat.toLowerCase())){
        return 1;
    }else{
        return 0;
    }
}