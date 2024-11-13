function camelize(str) {
    let charArr = str.split("");
    let newStr = [];

    for (let i=0; i<charArr.length; i++) {
        let char = charArr[i];
        if (char !== "-") {
            newStr.push(char.toLowerCase());
        } else {
            newStr.push(str[i+1].toUpperCase());
            i++;
        }
    }

    return newStr.join("");
}

let string1 = camelize("background-color");
let string2 = camelize("list-style-image");
let string3 = camelize("-webkit-transition");

console.log(string1);
console.log(string2);
console.log(string3);