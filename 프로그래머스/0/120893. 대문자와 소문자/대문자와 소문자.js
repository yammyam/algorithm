const solution = (my_string) => {
    return [...my_string].map((ch) =>ch === ch.toUpperCase() ? ch.toLowerCase() : ch.toUpperCase()).join("")
}