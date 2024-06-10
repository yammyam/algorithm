function solution(a, b, c) {
    return(a===b&&b===c) ? (a+b+c)*(a**2+b**2+c**2)*(a**3+b**3+c**3):
    ((a!==b&&b!==c&&c!==a) ? a+b+c : (a+b+c)*(a**2+b**2+c**2) )
}