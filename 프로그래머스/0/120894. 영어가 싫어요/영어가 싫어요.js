function solution(numbers) {
    const arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let answer = "";
    arr.forEach((item, i)=>{
          numbers = numbers.split(item).join(i);
    })
    return Number(numbers)
}