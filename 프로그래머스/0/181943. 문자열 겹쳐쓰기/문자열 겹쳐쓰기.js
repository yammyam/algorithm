function solution(my_string, overwrite_string, s) {
    var answer = '';
    let length = overwrite_string.length + s;
    return my_string.slice(0,s) + overwrite_string + my_string.slice(length);
}