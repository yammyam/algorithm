const  solution = (numbers) =>{
    let answer = numbers.sort((a,b)=>{
        const ap = `${a}`+`${b}`;
        const bp = `${b}`+`${a}`;
        if(Number(ap)>Number(bp))
            return -1;
        if (Number(ap) < Number(bp)) 
            return 1;
        return 1;
    })
    return answer[0]!==0?answer.join(""): "0";
}
//예외도 잊지말것.