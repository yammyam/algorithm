function solution(arr, delete_list) {
    return arr.filter((i)=>{if(!delete_list.includes(i)){
        return i;
    }});
}