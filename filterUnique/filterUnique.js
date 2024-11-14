function filterUnique(arr) {
    return arr.filter((e) => {
        return arr.findIndex((element) => element === e) === arr.findLastIndex((element) => element === e);
    });
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
console.log(filterUnique(strings)); // Hare, Krishna, :-O