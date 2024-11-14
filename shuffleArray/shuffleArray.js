function shuffle(arr){
    return arr.sort((a, b) => {
        if (a > b) return Math.random() * (1- -1) + -1;
        if (a == b) return Math.random() * (1- -1) + -1;
        if (a < b) return Math.random() * (1- -1) + -1;
    })
}

let arr = [1, 2, 3];

console.log(shuffle(arr));
// arr = [3, 2, 1]

console.log(shuffle(arr));
// arr = [2, 1, 3]

console.log(shuffle(arr));
// arr = [3, 1, 2]
// ...