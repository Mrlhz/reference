let version1 = 'v1.2.97a';
let version2 = 'v1.10.1b';
let versionArr1 = version1.replace(/[a-zA-Z]/g, (match, i) => '.' + match.charCodeAt()).split(/[^\d]/);
let versionArr2 = version2.replace(/[a-zA-Z]/g, (match, i) => '.' + match.charCodeAt()).split(/[^\d]/);

// 保证两个数据长度一样，面向 `v1.2` 和 `v1.2.3` 这样的情况
if (versionArr1.length > versionArr2.length) {
    versionArr2.splice(versionArr2.length, 0, ...Array(versionArr1.length - versionArr2.length).fill(0))
} else {
    versionArr1.splice(versionArr1.length, 0, ...Array(versionArr2.length - versionArr1.length).fill(0))
}

// // 按节比较
// let version1 = '1.1.30b';
// let version2 = '1.20.3a';
let result = 'version1 equels version2.';
for (let i = 0; i < versionArr1.length; i++) {
    if (+versionArr1[i] > +versionArr2[i]) {
        result = 'version1 is bigger.';
        break;
    } else if (+versionArr1[i] < +versionArr2[i]) {
        result = 'version2 is bigger.';
        break;
    }
}
console.log(result);

toNumber('1.2.3b');
toNumber('1.1.30b');
toNumber('1.20.3a');
toNumber('1.2.4b');
toNumber('12.2.4b');
toNumber('v1.2.4b');
toNumber('v1.2.3a');
toNumber('v1.20.97a');
toNumber('v5.2.97a');

function toNumber(str) {
    let remove_point = (str).split('.'),
        result = [];
    for (let code of remove_point) {
        if (Number.isNaN(parseInt(code))) { // parseInt('v1') === NaN
            result.push(code.charCodeAt()); // 'v1'.charCodeAt()
            result.push(parseInt(code.substring(1)));
        } else {
            let last_code = code[code.length - 1];
            result.push(parseInt(code));
            Number.isNaN(parseInt(last_code)) ? result.push(last_code.charCodeAt()) : result.push(); // '1.2.3a a''
        }
    }
    return result;
}

function compare(arr1, arr2) {
    if (arr1.length === arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] === arr2[i]) {
                continue;
            }
            else if (arr1[i] > arr2[i]) {
                console.log('v1 bigger');
                break;
            }
            else {
                console.log('v2 bigger');
                break;
            }
        }
    } else {
        console.log('传入的2个版本号格式请保持一致');
    }
}

compare([1, 2, 3, 97], [1, 1, 3, 98]);
compare(toNumber('1.2.3b'), toNumber('5.2.97'));

// console.log(remove_point);    // console.log(result);
