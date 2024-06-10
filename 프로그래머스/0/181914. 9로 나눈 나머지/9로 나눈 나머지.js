function solution(number) {
    return (number.split("").reduce((a,c)=> Number(a)+Number(c)))%9;
}