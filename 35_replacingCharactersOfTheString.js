// Replacing character of a string

let myString = 'lorem ipsum sin dor imet.';

let newString = myString.replace('dor', 'NEW WORD');


console.log(newString);

const replace = (str, a, b) => {
    str = str.replace(a, b);
    return str;
}

let myStrs = "hello there, this is a test line";
console.log(replace(myStrs, 'there', 'guys'));
