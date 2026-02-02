// const solution = (n) => {
//     6*a 
//     (6*증가1++)%n===0
//     var answer = 0;
//     return answer;
// }
const solution = n => n / gcd(6, n);
const gcd = (a, b) => b ? gcd(b, a % b) : a;