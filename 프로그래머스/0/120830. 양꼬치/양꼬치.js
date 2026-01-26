const solution = (n, k) => {
    let discount = n/10;
    return  discount < 1 ? (n*12000+k*2000) :(n*12000+k*2000)-(Math.floor(discount)*2000);
}