function solution(my_string, queries) {
    for(let i = 0 ; i <queries.length ; i++){
          let strArr = my_string.split("");
        [a,b] = queries[i];
        my_string = my_string.slice(0,a)+strArr.slice(a,b + 1).reverse().join("")+my_string.slice(b+1)
    }
    return my_string;
}