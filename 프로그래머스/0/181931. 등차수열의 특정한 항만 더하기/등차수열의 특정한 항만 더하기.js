function solution(a, d, included) {
    return  included.map((_, index)=>{
        if(included[index])
            return (index*d) + a;
        else
            return 0;
    }).reduce((a,c)=>a+c,0);
}