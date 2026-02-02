const solution = (age) => {
    return [...String(age)].map((item)=>"abcdefghij"[Number(item)]).join("");
}