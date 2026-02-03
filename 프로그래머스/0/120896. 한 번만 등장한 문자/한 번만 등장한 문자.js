const solution = (s) => {
    return [...s].filter((item,i)=>s.indexOf(item)===s.lastIndexOf(item)).sort().join("");
}