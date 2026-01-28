const solution = (genres, plays) => {
    let answer  = [] 
    
    let obj = {};
    for(let i = 0 ; i < genres.length; i++){
        let name = genres[i];
        let count = [plays[i],i]
        if(!obj[name]){
            obj[name] = [] 
        }
       obj[name].push(count);
    }//얘도 정렬해야되는데?
    
    
    // 총 재생횟수 
    let genreSum = {};
    // ["classic" , "pop"]
    for(let i = 0 ; i <genres.length; i++){
        let type = genres[i]
        genreSum[type] = (genreSum[type] || 0) + plays[i]
         //구조분해할당과 단락회로평가
    }
    // genreSum = {
    //     "classic" : 3150,
    //     "pop" : 1400
    // }
    //합구했고 , 해시맵만들었고,
    let sortedArr = Object.keys(genreSum).sort((a,b)=> genreSum[b] - genreSum[a] )
    //내림차순으로 만들겠다 근데 이름은 a,b인  3150 - 1400  => ["classic" , "pop", "그다음 총재생수낮은것"]
    for(let i of sortedArr){
        obj[i] = obj[i].sort((a,b)=>b[0]-a[0])
    }
    
     // 4500.. .. 근데 이렇게저장말고 비교는 총재생횟수(gerensum)그걸로하되.. 이름은 pop classic으로
    for(let i of sortedArr){
        answer.push(obj[i][0][1]);
        if(obj[i][1]){
            answer.push(obj[i][1][1])
        }
    }
    
    return answer
}
