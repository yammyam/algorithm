const solution = (slice, n) => {
    return(slice >= n) ? 1 : Math.ceil(n/slice)
}