function sortDecreasing(arr) {
    return arr.sort((a, b) => {
        if (a > b) return -1;
        if (a == b) return 0;
        if (a < b) return 1;
    });
}   

let arr = [5, 2, 1, -10, 8];
let sorted = sortDecreasing(arr);
console.log(sorted);