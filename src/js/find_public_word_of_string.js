/**
 * 求出字符串s与字符串t的第二长公共单词
 *
 */

// 根据空格分割字符串中的单词
const getStrToArr = (s) => s.split(' ');
// 数组比较大小
const getBiggest = (arr) => arr.concat().sort((x, y) => {
    return x - y;
});

// console.log(getStrToArr('This is C programming text'));
// console.log(getStrToArr('This is a text for C programming'));


function getStr(s, t) {
    let arr1 = getStrToArr(s),
        arr2 = getStrToArr(t),
        result = [];
    // let longer = s.length > t.length ? s.length : t.length;
    // TODO：迭代循环中选出s和t字符串中的公共单词（有bug,情况没有考虑完全）
    for (let a of arr1) {
        if (arr2.indexOf(a) !== -1) {
            result.push(a.length);
        }
    }
    // 没有公共单词则返回NULL
    if (result.length === 0) {
        console.log('NULL');
        return;
    }
    let biggest = getBiggest(result).pop(); // 去掉数组中最长单词的长度
    let second = getBiggest(result.filter(value => value !== biggest)).pop(); // 在去除最长单词的数组中筛选最长单词的长度
    console.log(arr1[result.indexOf(second)]);
    console.log(result);
    return arr1[result.indexOf(second)]; // 根据索引返回单词
}

// getStr('This is C programming text programming', 'This is a text for C programming');
getStr('This is C programming text ', 'This is a text for C programming programming');
getStr('the book', 'This is a text for C programming');

/**
 *  某些正整数能分解成若干个连续整数的和的形式
 *  15=1+2+3+4+5
 *  15=4+5+6
 *  15=7+8
 *  某些整数不能分解为连续整数的和，例如：16
 *  输入：一个整数N（N <= 10000）
 *  输出：整数N对应的所有分解组合，按照每个分解中的最小整数从小到大输出，
 *  每个分解占一行，每个数字之间有一个空格（每行最后保留一个空格）；
 *  如果没有任何分解组合，则输出NONE。
 */

//  根据题目，任何可以进行分解的整数，必然满足(m+n)(n-m+1)/2的形式，
//  可以暴力尝试所有m和n组合，如果满足则输出，否则输出None

function getNumbers(n) {
    const N = 10000;
    let s;
    for (let i = 2; i < N / 2; i++) {
        if ((n - i * (i - 1) / 2) % i === 0) {
            s = (n - i * (i - 1) / 2) / i;
            if (s > 0) {
                for (let j = 0; j < i; j++) {
                    console.log(s + j)
                }
            }
        }
    }
}

//  0+1         1
//  0+1+2       3
//  0+1+2+3     6
//  0+1+2+3+4   10
//  0+1+2+3+4+5 15

getNumbers(15);