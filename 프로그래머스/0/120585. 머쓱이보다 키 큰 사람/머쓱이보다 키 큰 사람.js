const solution = (array, height) => {
    return array.filter((i) => i > height).length
}