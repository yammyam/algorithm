function solution(myString) {
    let arr = myString.split("").map((i)=>{
        if(i !== "x"){
            return 1;
        }else{
            return 0;
        }
    });
    let count = 0
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] === 0){
            count++;
        }
    }
    //count 5
    let res = new Array(count+1).fill(0);
    let index = 0;
    for(let j = 0 ; j < arr.length ; j++){
        if(arr[j] === 1){
            res[index]+=1;
        }else{
            index+=1;
        }
    }
    return res;
}