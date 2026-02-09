const solution = (common) => {
    const a = common[0] , b = common[1] , c = common[2]
    if((b-a) === (c-b))
        return common[common.length-1] + (b-a)
    return common[common.length-1]*(b/a)
}