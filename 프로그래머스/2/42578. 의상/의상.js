const  solution = (clothes) => {
    let obj = {}
    //배열의 1번쨰 인덱스로 객체를만들어
    // headgear = [yellow_hat,green_turban] 객체형태? 
    for(let i  of clothes){
        if(obj[i[1]] === undefined){
            obj[i[1]] = []
        }
        obj[i[1]].push(i[0])
    }
    let div = 1;
    for (let i  in obj){
        div *= obj[i].length+1;
    }
   
    return div-1;
}