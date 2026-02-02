// const solution = (n) => {
//     6*a 
//     (6*증가1++)%n===0
//     var answer = 0;
//     return answer;
// }
const solution = n => {
    const gcd = (a, b) => b ? gcd(b, a % b) : a;
    return n / gcd(6, n);
    //LCM(6,10)=30 / 6/////6*10/GCD(6,10)/6 -> n/gcd(6,n)
}