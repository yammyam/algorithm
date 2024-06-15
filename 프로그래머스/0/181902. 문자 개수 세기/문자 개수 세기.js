function solution(my_string) {
    let res = new Array(52).fill(0);
    let temp;
    for(let i = 0 ; i < my_string.length; i++){
        if (my_string[i] >= 'A' && my_string[i] <= 'Z') {
            temp = my_string[i].charCodeAt(0) - 'A'.charCodeAt(0);
            res[temp]++;
        } else if (my_string[i] >= 'a' && my_string[i] <= 'z') {
            temp = my_string[i].charCodeAt(0) - 'a'.charCodeAt(0) + 26;
            res[temp]++;
        }
    }
    return res;
}