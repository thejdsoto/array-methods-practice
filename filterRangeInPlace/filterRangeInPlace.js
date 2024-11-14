function filterRangeInPlace(arr, low, high) {
    for (let i=0; i<arr.length;i++) {
        if (arr[i] < low || arr[i] > high) {
            arr.splice(i, 1);
        }
    }

    return arr;
}

let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); 
console.log(arr);