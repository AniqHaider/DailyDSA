// To check if a string is palindrome or not ...

const palindromicString = (s) => {
    const len = s.length;
    for (let i = 0; i < len / 2; i++) {
        if (s[i] !== s[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(palindromicString('racecar'));
console.log(palindromicString('aniqqina'));
console.log(palindromicString('primathonacademy'));
console.log(palindromicString('112343211'));
