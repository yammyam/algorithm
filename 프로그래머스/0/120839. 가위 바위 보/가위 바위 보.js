const solution = (rsp) => {
    return [...rsp].map((item)=>({
        "2":"0",
        "0":"5",
        "5":"2",
    })[item]).join("")
}