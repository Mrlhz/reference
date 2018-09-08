// 计算给定数组 arr 中所有元素的总和
// 函数式编程 map-reduce：
function sum(arr) {
    return arr.reduce(function (prev, curr, idx, arr) {
        return prev + curr;
    });
}

// 常规循环：
function sum1(arr) {
    let sum = 0;
    for (let i = 0, len = arr.length; i < len; i++) {
        sum += arr[i];
    }
    return sum;
}

// 不考虑算法复杂度，用递归做：
function sum2(arr) {
    let len = arr.length;
    if (len === 0) {
        return 0;
    } else if (len === 1) {
        return arr[0];
    } else {
        return arr[0] + sum(arr.slice(1));
    }
}


// forEach遍历：
function sum3(arr) {
    let s = 0;
    arr.forEach(function (val, idx, arr) {
        s += val;
    }, 0);

    return s;
}

function sum4(arr) {
    return eval(arr.join("+"));
}