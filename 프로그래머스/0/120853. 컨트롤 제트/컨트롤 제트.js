function solution(s) {
    let arr = s.split(" ")
    let answer = arr.map((item,i)=>{
        if(item === "Z")
            return -Number(arr[i-1])
        else
            return Number(item);
    })
    return answer.reduce((acc,cur)=> acc+cur,0)
    //["1","2","-2","3"]
}