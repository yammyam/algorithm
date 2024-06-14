function solution(order) {
    return order.map((i,index)=>{
        if(i.includes("latte")){
            return 5000;
        }else{
            return 4500;
        }
    }).reduce((a,c)=>a+c);
}