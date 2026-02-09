const solution = (a, b) => {
    b /= gcd(a,b);
    while(b%2===0)
        b/=2
    while(b%5===0)
        b/=5
    return b === 1 ? 1: 2;
}
function gcd(a,b){
    return b === 0 ? a : gcd(b,a%b)
}