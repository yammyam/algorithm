function solution(numLog) {
    let res = "";
    let differences = numLog.map((item, index, array) => {
    if (index === 0) {
        return null;
    } else {
        return item - array[index - 1];
    }
    }).slice(1);
    for(let i = 0 ; i < differences.length; i++){
        switch(differences[i]){
            case 1:res+="w";break;
            case 10:res+="d";break;
            case -1:res+="s";break;
            case -10:res+="a";break;
        }
    }
    return res;
}