function repeatString(string, num) {
  // your code here...
    let repeatString = '';
    for (let i = 0; i < num; i++) {
        repeatString += string;
    }
    return repeatString;
}
module.exports = repeatString