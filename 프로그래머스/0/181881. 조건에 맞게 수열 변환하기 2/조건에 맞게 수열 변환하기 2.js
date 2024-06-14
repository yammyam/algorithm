function solution(arr) {
    function transform(a) {
        return a.map(x => {
            if (x % 2 === 0 && x >= 50) {
                return x / 2;
            } else if (x % 2 === 1 && x < 50) {
                return x * 2 + 1;
            } else {
                return x;
            }
        });
    }

    let seen = new Map();
    let current = arr.slice();

    for (let i = 0; i <= 1000000; i++) { // 최대 100만 번까지 반복
        let key = current.join(',');
        if (seen.has(key)) {
            return seen.get(key);
        }
        seen.set(key, i);
        current = transform(current);
    }

    return -1;
}