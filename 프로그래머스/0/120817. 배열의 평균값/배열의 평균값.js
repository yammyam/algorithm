const solution = (numbers) => {
    const ans = numbers.reduce((acc,cur)=>acc+cur,0)
    return ans/(numbers.length)
}