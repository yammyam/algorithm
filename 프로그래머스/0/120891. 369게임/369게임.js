const solution = (order) => {
    return [...String(order)].filter((item)=>item!=="0"&&Number(item)%3===0).length
}