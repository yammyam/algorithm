const  solution = (dot) => {
    let [x,y] = dot;
    let check = x*y > 0;
    return check ? (x<0?3:1) : (x<0?2:4)
}