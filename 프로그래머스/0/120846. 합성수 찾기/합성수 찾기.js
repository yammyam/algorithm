const solution = (n) => {
    return Array.from({length: n-3}, (_, i) => i + 4)
        .filter((item)=>Array.from({length:item},(_,j)=>j+1).filter((x)=>item%x===0).length>=3).length
}//합성수는 4부터시작이라 0+4를해서 4부터시작하도록 줄임