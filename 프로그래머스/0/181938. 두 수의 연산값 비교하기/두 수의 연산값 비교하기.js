function solution(a, b) {
    let sum = String(a) + String(b);
    return Number(sum) >= a*b*2 ? Number(sum) : a*b*2;
}
