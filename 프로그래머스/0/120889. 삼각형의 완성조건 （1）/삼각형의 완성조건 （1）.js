const  solution = (sides) => {
  // sides.sort((a, b) => a - b);
  // return sides[0] + sides[1] > sides[2] ? 1 : 2;
    return sides.reduce((acc,cur)=> acc+cur,0) - Math.max(...sides) > Math.max(...sides) ? 1 : 2
}
