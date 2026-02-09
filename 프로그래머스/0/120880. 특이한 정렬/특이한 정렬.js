const solution = (numlist, n) =>{
    return numlist.sort((a,b)=>{
        const na = Math.abs(n-a)
        const nb = Math.abs(n-b)
        if(na===nb)return b-a
        return na-nb
    })
}
// function solution(numlist, n) {
//     let order = numlist.map((item)=>Math.abs(item-n));
//     let sorted = order.slice().sort((a,b)=>a-b);
//     return sorted.map((item)=>numlist[order.lastIndexOf(item)])
// }
