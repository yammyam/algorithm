const solution = (my_string) => {
    return [...[...my_string].filter((i)=>!Number.isNaN(Number(i)))].reduce((acc,cur)=>Number(acc)+Number(cur),0)
}