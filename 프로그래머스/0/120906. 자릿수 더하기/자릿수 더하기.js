const solution = (n) => {
    return [...String(n)].reduce((acc,cur)=>Number(acc)+Number(cur),0)
}