function solution(myString, pat) {
     const regex = new RegExp(`(?=${pat})`, 'g');
    return Array.from(myString.matchAll(regex)).length;
}