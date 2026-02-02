function solution(cipher, code) {
  return [...cipher].filter((item,i)=>(i+1)%code === 0).join("")
}