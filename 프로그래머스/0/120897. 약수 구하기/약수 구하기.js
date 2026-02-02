const solution = (n) => {
    return Array.from({length : n}, (_,i)=> (i+1)).filter((item,i)=> n%item===0)
}