function solution(a, b, c, d) {
    let dice = [a, b, c, d].sort((x, y) => x - y);
    let [x1, x2, x3, x4] = dice;
    if (x1 === x4) {
        return 1111 * x1;
    }
    if (x1 === x3 || x2 === x4) {
        let p = x2;
        let q = x1 === x3 ? x4 : x1;
        return Math.pow((10 * p + q), 2);
    }
    if (x1 === x2 && x3 === x4) {
        return (x1 + x3) * Math.abs(x1 - x3);
    }
    if (x1 === x2) {
        return x3 * x4;
    } else if (x2 === x3) {
        return x1 * x4;
    } else if (x3 === x4) {
        return x1 * x2;
    }
    return x1;
}