const solution = (n) => {
    let arr = []
    let num = 1;
    while(arr.length<n){//12 13  33 34 35 36 39 40
        while(num%3===0 || String(num).includes("3"))
            num++;
        arr.push(num)
        num++
    }
    return arr[n-1]
}