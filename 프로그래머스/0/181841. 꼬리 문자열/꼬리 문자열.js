function solution(str_list, ex) {
    return str_list.filter((i)=>{if(!i.includes(ex)){return i;}}).join("");
}