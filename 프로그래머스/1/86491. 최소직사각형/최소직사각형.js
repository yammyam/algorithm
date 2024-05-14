function solution(sizes) {
    for(let i = 0 ; i < sizes.length; i++){
        if(sizes[i][0]>sizes[i][1])
            sizes[i]=[sizes[i][1],sizes[i][0]];
    }//정렬먼저 작왼크오
    let a = sizes[0][0];
    let b = sizes[0][1];
    for(let j = 1 ; j < sizes.length; j++){
        if(sizes[j][0]>a)
            a = sizes[j][0];
        if(sizes[j][1]>b)
            b = sizes[j][1];
    }
    return a*b;
}