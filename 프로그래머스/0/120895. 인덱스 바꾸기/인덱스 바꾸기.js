const solution = (my_string, num1, num2) => {
    let arr = [...my_string];
    [arr[num2], arr[num1]] = [arr[num1], arr[num2]]
    return arr.join("")
}