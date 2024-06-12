function solution(myString, pat) {
    //lastindexof를 사용하고 pat의 길이만큼, 그리고 slice
    let start = myString.lastIndexOf(pat)
    let leng = pat.length
    return myString.slice(0,start+leng)
}