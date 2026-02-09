const solution = (chicken) => {
    // 쿠폰으로시키면 => 그마리수만큼 쿠폰임  마릿수=쿠폰
    let coupon = chicken;
    let answer = 0;
    while(coupon >= 10){//ex)199 <- 연속 합산동작이 많이일어나는 수, 버그가 많이발생할수 있는 수
        // coupon의 범위를 왜 >=10한것인지에 대한 이유 : 10장이 있어야지 1마리 주문가능하기때문?
        answer += Math.floor(coupon/10)//0 = 0+19
        coupon = (coupon%10)+Math.floor(coupon/10);
        //coupon = 9+19 => 28마리가지고 다시 시작
        //28>=10
        //19+  28/10 =>2 =21
        // coupon = 8+ 2=>10
        //10>=10
        //answer = 21+1 =>22
        //coupon = 0+1
    }
    return answer;
}
// function solution(chicken) {
//     let 공짜치킨 = 0;
//     let rest = 0;
//     while(chicken>=10){//1081, 108
//         rest += chicken%10; // 1 , 8  ,0
//         chicken = Math.floor(chicken/10); // 108 , 10 , 1
//         공짜치킨 += chicken//118+1
//     }
//     return 공짜치킨+Math.floor((rest+chicken)/10)
// }

// function solution(chicken) {
//     let 공짜치킨 = 0;
//     let rest = 0;
//     while(chicken>=10){//1081, 108
//         rest += chicken%10; // 1 , 8  ,0
//         chicken = Math.floor(chicken/10); // 108 , 10 , 1
//         공짜치킨 += chicken//118+1
//     }
//     return 공짜치킨+Math.floor((rest+chicken)/10)
// }