// 9. Write a function which accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
function detect_data_type(value)
{
     return typeof value;
}
console.log(detect_data_type(28));
console.log(detect_data_type('komanda'));
console.log(detect_data_type(false));