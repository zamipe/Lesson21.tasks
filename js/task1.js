// Example x = 32243;
// 1. Write a function that reverse a number.
// Expected Output : 34223


function reverseWord(phrase) {
    return phrase
    .split('')
    .reverse()
    .join(''); 
}
console.log(reverseWord('32243'));
