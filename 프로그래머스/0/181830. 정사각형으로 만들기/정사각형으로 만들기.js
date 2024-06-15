function solution(arr) {
    let a = arr[0].length;
    let b = arr.length;
    if(a<b){
        for(let i = 0 ; i < arr.length ;i++){
            for(let j = 0 ; j <b-a ;j++){
                arr[i].push(0);
            }
        }
    }
    if(a>b){
        for(let i = 0 ; i < a-b; i++){
            arr.push(Array(a).fill(0));
        }
    }
    
    return arr;
}