// 数组去重
function noRepeat(arr) {
    let result = [];
    for (let item of arr) {
        if (result.indexOf(item) === -1) {
            result.push(item);
        }
    }
    return result;
}

// ES6
function noRepeat1(arr) {
    return new Set(arr);
}

const unique = (arr) => [...new Set(arr)];

noRepeat();