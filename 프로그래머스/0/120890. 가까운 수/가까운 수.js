const solution = (array, n) => {
    const arr = array.slice().sort((a,b) => a-b);
    const arr2 = arr.map(i=> (i-n) < 0 ? (n-i) : (i-n)) // [3,2,1]
    return arr[arr2.indexOf(Math.min(...arr2))];
}