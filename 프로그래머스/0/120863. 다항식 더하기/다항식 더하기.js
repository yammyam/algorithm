const solution = (polynomial) => {
    let x = 0;
    let c = 0;
    let arr = polynomial.split(" + ")
    for(let i = 0 ; i <arr.length; i++){
        if(arr[i] === "x"){
            x+=1;
        }
        if(arr[i].includes("x") && arr[i].length!==1){ //계수붙은x일때
            x += Number(arr[i].split("x")[0])
        }
        if(!Number.isNaN(Number(arr[i]))){//숫자일때
            c+=Number(arr[i])
        }
    }
    if(x===0 && c===0)
        return "";
    else if(x===0 && c!==0)
        return `${c}`;
    else if(x!==0 && c===0)
        return x ===1 ? "x" : `${x}x`;
    else if(x!==0 && c!==0)
        return x===1 ? `x + ${c}`: `${x}x + ${c}`
}
