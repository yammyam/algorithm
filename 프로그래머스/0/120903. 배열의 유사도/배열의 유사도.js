const solution = (s1, s2) => {
    let obj = {};
    for(let i of s1){
        if(s2.includes(i))
           obj[i] = (obj[i]|| 1)
    }
    return Object.keys(obj).length
}