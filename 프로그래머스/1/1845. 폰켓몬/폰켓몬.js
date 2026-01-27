// function solution(nums) {
//     let leng = nums.length/2;
//     let arr = Array.from(new Set(nums));
//     let count = 0;
//     if(arr.length > leng){
//         return leng;
//     }else{
//         return arr.length;
//     }
// }
const solution = (nums) => {
    let l = nums.length/2;
    let unique = [...new Set(nums)];
    return l > unique.length ? unique.length : l
}