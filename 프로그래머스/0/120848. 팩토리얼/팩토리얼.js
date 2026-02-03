const solution = (n) => {
    let answer = 1;
    let i = 1;
    while(answer <= n){
        i++;
        answer = answer * i;
    }
    return i-1;
}