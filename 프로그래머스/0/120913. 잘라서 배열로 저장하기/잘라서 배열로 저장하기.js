const solution = (my_str, n) => {
    // my_str.slice(0,6)// (i,i+n)
    // my_str.slice(6,12)
    let answer = []
    for(let i  = 0 ; i < Math.ceil(my_str.length/n) ;i++)
        answer.push(my_str.slice(i*n,(i+1)*n))
    return answer
}