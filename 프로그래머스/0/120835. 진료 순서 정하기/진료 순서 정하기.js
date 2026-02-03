const solution = (emergency) => {
    let order = emergency.slice().sort((a,b)=>b-a);// [76,24,3] = order
    return emergency.map((item,i) => order.indexOf(item) + 1)//등수는 1부터 시작해서 인덱스+1
}
// [76,24,3] = order
// let arr  = emergency.slice().sort((a,b)=>b-a).map((item,i)=>[item,i+1]);