module.exports = function check(str, bracketsConfig) {
  let arr = [];
    for (let i = 0; i < bracketsConfig.length; i++) {
        arr.push(bracketsConfig[i].join(''));
    }
    for (let y = str.length; y >= 0; y--) {
        for (let j = 0; j < arr.length; j++) {
            if (str.includes(arr[j])) {
                str = str.replace(arr[j], '');
            }
        }
    }
    return str === '';
}
