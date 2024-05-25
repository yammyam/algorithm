function solution(my_strings, parts) {
    var answer = '';
    for(let i = 0 ; i < parts.length; i++ ){
        // for(let j = parts[i][0] ; j < parts[i][1] - parts[i][0] + 1; j++){
        //     answer += my_strings[i][j];
        // }
        answer += my_strings[i].substring(parts[i][0],parts[i][1]+1);
    }
    return answer;
}