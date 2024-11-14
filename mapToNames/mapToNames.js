function mapToNames(arg) {
    return arg.map((e) => e.name);
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = mapToNames(users);
console.log( names ); // John, Pete, Mary
