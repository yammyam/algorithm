const solution = (numbers) => {
    numbers.sort((a,b)=>a-b);
    const l = numbers.length;
    const start  = numbers[0]*numbers[1];
    const end = numbers[l-1]*numbers[l-2];
    return start>end ? start: end;
}