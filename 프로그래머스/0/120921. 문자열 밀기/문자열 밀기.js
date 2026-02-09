const solution = (A, B) => {
    if(A===B)return 0;
    for(let i = 0 ; i <A.length-1;i++){
        A = A.slice(A.length-1)+ A.slice(0,A.length-1);
        if(A===B){
            return i+1;
        }
    }
    return -1;
}