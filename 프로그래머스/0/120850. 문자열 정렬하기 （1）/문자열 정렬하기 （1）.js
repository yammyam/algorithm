const solution = (my_string) => {
    return [...my_string].filter((item)=> !isNaN(Number(item))).map((item)=>Number(item)).sort((a,b)=>a-b);
}