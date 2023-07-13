// program to replace all line breaks with something
const string = `I am Learning JavaScript.
js is not complicated.
JavaScript is fun and straightforward.
JavaScript is easy and loosely typed.`;

const result = string.split('\n').join('  LINE BREAK  ');

console.log(result);