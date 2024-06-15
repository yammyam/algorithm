function solution(n) {
    let num = 1;
    let row = 0;
    let column = 0;
    let arrmap = Array.from({ length: n }, () => new Array(n).fill(0));
    //한바퀴, 오아왼위 후에 다음 바퀴의 오른쪽으로가는 시작은 기존n에서 -2된 값
    for(let i = n ; i > 0 ; i-=2){
        // 오른쪽 (바깥 i 의 -2연산으로 자동으로 숫자입력 반복횟수가 정해짐)
        for(let j = 0 ; j < i ; j++){
            arrmap[row][column] = num;
            num++;
            column++;
        }
        column--;
        row++
        //아래(아래로갈때 넣어주는 횟수가 1회감소함 )
        for(let j = 0 ; j < i-1 ;j++){
            arrmap[row][column] = num;
            num++;
            row++;
        }
        row--;
        column--;
        //왼쪽(왼쪽으로갈때 넣어주는 횟수가 1회감소함)
        for(let j = 0 ; j < i-1 ; j++){
            arrmap[row][column] = num;
            num++;
            column--;
        }
        column++;
        row--;
        // 위(위로갈때 넣어주는횟수가 2감소함)
        for(let j = 0 ; j < i-2 ; j++){
            arrmap[row][column] = num;
            num++;
            row--;
        }
        row++;
        column++;
    }
    return arrmap;
}