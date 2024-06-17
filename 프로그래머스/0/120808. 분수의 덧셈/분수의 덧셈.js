function solution(numer1, denom1, numer2, denom2) {
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }
    
    let answer = [0,0];
    if(denom1 === denom2){
        answer[1] = denom1;
        answer[0] = numer1+numer2;
    }else{
        answer[1] = denom1*denom2;
        answer[0] = numer1*((denom1*denom2)/denom1)+numer2*((denom1*denom2)/denom2);
    }
    let d = gcd(answer[0],answer[1]);
    
    
    
    return [answer[0]/d,answer[1]/d];
}