const solution = (nums) => {
    let l = nums.length/2;
    let unique = [...new Set(nums)];
    return l > unique.length ? unique.length : l
}