// 2. Write a function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

function palindrome(str) {

    let len = str.length;
    let mid = Math.floor(len/2);

    for ( let i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(palindrome('madam'));