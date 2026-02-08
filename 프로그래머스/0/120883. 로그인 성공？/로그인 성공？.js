const solution = (id_pw, db) => {
    let [id,pw] = id_pw;
    let check = false;
    for(let item of db){
        if(id===item[0])
            check = !check
        if(id===item[0]&&pw===item[1])
            return "login"
    }
    return check ? "wrong pw" : "fail"
} 