function solution(board, k) {
    let answer = 0;
    let leng = board[0].length
    for(let i = 0 ; i<board.length; i++){
        for(let j = 0 ; j < leng ;j++){
            if(i+j<=k){
                answer+=board[i][j]
            }
        }
    }
    return answer;
}