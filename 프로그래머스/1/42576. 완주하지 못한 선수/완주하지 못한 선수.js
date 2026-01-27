const solution = (participant, completion) => {
    let count = {}
    for (let i of participant){
        count[i] = (count[i] ||0) +1
    }
    for (let i  of completion){
        count[i] -=1 
    }
    for (let i in count){
        if(count[i] !== 0)
            return i
    }
}