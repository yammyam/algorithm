function solution(picture, k) {
    let temp = "";
    let res = [];
    for(let i = 0 ; i  < picture.length;i++){
        for(let j = 0 ; j < picture[i].length; j++){
            temp += picture[i][j].repeat(k);
        }
        for(let w = 0 ; w < k; w++){
            res.push(temp);
        }
        temp = "";
    }
    return res;
}