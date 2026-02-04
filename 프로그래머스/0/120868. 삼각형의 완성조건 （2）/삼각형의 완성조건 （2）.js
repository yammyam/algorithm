const solution = (sides) => {
    // let answer = 0;
    // let [a,b] = [sides[0],sides[1]]
    // let sum = a+b;
    // let case1 = Math.max(...sides);
    // let case2 = Math.min(...sides);
    // for(let i = 1 ;i<=case1; i++){
    //     if(case2+i>case1)
    //         answer++;
    // }//가장긴변이 sides에 존재할경우
    // for(let i = case1+1 ; i<sum ;i++)
    //     if(i<case1+case2)
    //         answer++;
    // return answer;
    return 2*Math.min(...sides)-1 // <- 일련의 삼각형 만족조건을 나열하다보니 나온 식
}