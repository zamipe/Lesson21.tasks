// 11. Write a function which will take an array of numbers stored and find the second lowest 
//and second greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4
debugger;
function Second_Greatest_Lowest(arr_num) {
    arr_num.sort(function (x, y) {
        return x - y;
    });
    let uniqa = [arr_num[0]];
    let result = [];

    for (var j = 1; j < arr_num.length; j++) {
        if (arr_num[j - 1] !== arr_num[j]) {
            uniqa.push(arr_num[j]);
        }
    }
    result.push(uniqa[1], uniqa[uniqa.length - 2]);
    return result.join(',');
}

console.log(Second_Greatest_Lowest([1, 2, 3, 4, 5]));
