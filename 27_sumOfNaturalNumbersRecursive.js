const sum = (input)=>{
    if(input > 0) {
        return input + sum(input - 1);
    }
    else {
        return input;
    }
}

console.log(sum(10));
console.log(sum(11));
console.log(sum(5)); // 0 +1 + 2 + 3 + 4 +5 