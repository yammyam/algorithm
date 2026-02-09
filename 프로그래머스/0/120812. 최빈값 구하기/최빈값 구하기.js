const solution = (array) => {
    let obj = {}
    for(let i of array){
        if(!obj[i])
            obj[i] = 1
        else
            obj[i]++;
    }
    // obj만들어짐
    let valueArr = Object.values(obj)
    let max = Math.max(...valueArr)
    if(valueArr.indexOf(max)!==valueArr.lastIndexOf(max))return -1
    for(let i in obj){
        if(obj[i] === max)
            return Number(i);
    }
}