const solution = (array) => {
    return array.map((item,i)=>[item,i]).sort((a,b)=>a[0]-b[0])[array.length-1]
}
