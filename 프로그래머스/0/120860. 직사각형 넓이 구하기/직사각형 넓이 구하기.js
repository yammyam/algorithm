const solution = (dots) => {
    var answer = 0;
    let Xarr = dots.map((item)=> item[0]).sort((a,b)=>a-b);
    let Yarr = dots.map((item)=> item[1]).sort((a,b)=>a-b);
    return (Xarr[Xarr.length-1]-Xarr[0])*(Yarr[Yarr.length-1]-Yarr[0])
}