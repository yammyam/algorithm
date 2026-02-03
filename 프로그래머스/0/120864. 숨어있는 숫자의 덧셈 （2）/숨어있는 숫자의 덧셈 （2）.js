function solution(my_string) {
    return (my_string.match(/\d+/g)||[]).reduce((acc,cur)=>Number(acc)+Number(cur),0)
}