const solution = (my_string, indices) =>{
    return my_string.split("").filter((i,index)=>!indices.includes(index)).join("");
}