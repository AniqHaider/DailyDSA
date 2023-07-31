// code for Number Of Ocurrence Of a Char In A string

const occurence = (str, a)=>{
    let count = 0;
    for(i=0; i<str.length;i++){
        if(str[i] == a){
            count++
        }
    }
    return count
}

let string = "primathon academy is the best";
console.log(occurence(string, 'a'))