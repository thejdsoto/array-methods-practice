function copySorted(arr) {
    let arrCopy = [];
    arr.map((e) => arrCopy.push(e));
    return arrCopy.sort();
}
let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (no changes)