const solution = (keyinput, board) => {
    let [a,b] = [0,0]
    const move = {
      up: [0, 1],
      down: [0, -1],
      left: [-1, 0],
      right: [1, 0]
    };
    let [maxX,maxY] = [Math.floor(board[0])/2,Math.floor(board[1]/2)]
    for(let item of keyinput){
        let [x,y] = move[item]
        if(Math.abs(a+x)<=maxX)
            a=a+x
        if(Math.abs(b+y)<=maxY)
            b=b+y
    }
    return [a,b]
}