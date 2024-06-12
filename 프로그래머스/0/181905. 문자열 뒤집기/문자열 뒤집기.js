function solution(my_string, s, e) {
    let arr = my_string.split("").slice(s,e+1).reverse();
    let my = my_string.split("");
    return (my.slice(0,s).concat(arr).concat(my.slice(e+1))).join("");
}