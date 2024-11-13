function filterRange(arr, high, low) {
    return arr.filter((e) => {
        return (e >= high && e <= low);
    });
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log(arr);
console.log(filtered);