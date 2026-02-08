const solution = (spell, dic) => {
    let newSPELL = spell.sort().join("");
    let newDIC = dic.map((item)=> [...item].sort().join(""))
    return newDIC.includes(newSPELL)? 1:2;
}