const  solution = (numbers) =>{
    let answer = numbers.sort((a,b)=>{
        const ap = `${a}`+`${b}`;
        const bp = `${b}`+`${a}`;
        if(Number(ap)>Number(bp))
            return -1;//a가 b보다 앞에와라
        if (Number(ap) < Number(bp)) 
            return 1;
        return 1;
    })
    return answer[0]!==0 ? answer.join("") : "0";
}
//0이라는 예외도 잊지말것.