const solution = ([id,pw], db) => {
    const findId = db.find(([dbid]) => dbid === id)
    //find는 일치하는것의 요소를 직접반환, 구조분해할당 두개받아야되지만 id만받아서 쓸수있음.여긴 2차원배열이니 요소를 id만배열하는게아니라 2차원배열이니까 안쪽 배열 하나를 반환해줌 ex)["meosseugi", "1234"]
    if(!findId)return "fail";
    return findId[1] === pw ? "login" : "wrong pw";
} 
// const solution = (id_pw, db) => {
//     let [id,pw] = id_pw;
//     let check = false;
//     for(let item of db){
//         if(id===item[0])
//             check = true
//         if(id===item[0]&&pw===item[1])
//             return "login"
//     }
//     return check ? "wrong pw" : "fail"
// } 