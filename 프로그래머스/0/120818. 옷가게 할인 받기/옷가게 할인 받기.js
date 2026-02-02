// const solution = (price) => {
//     if(price >= 100_000 && price<300_000)
//         return Math.floor(price*(0.95))
//     else if(price >= 300_000 && price<500_000)
//         return Math.floor(price*(0.9))
//     else if(price >= 500_000)
//         return Math.floor(price*(0.8))
//     else
//         return price;
// }
const solution = (price) => {
   return Math.floor(price*(price>=500_000?0.8:price>=300_000?0.9:price>=100_000?0.95:1))
}