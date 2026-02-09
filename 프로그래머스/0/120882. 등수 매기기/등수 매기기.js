const solution = (score) => {
    let aveScore = score.map((item)=>(item[0]+item[1])/2)
    let order = aveScore.slice().sort((a,b)=>b-a);
    return aveScore.map((item)=>order.indexOf(item)+1)
}