const solution = (num, k) => {
    const arr = [...num.toString()].map((item,i)=>[item,i+1]);
    for(let i of arr)
        if(i[0] === String(k))
            return Number(i[1]);
    return -1
}