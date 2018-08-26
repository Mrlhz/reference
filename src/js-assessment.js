// 找出元素 item 在给定数组 arr 中的位置
function indexOf(arr, item) {
    if (Array.prototype.indexOf) {
        return arr.indexOf(item);
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                return i;
            }
        }
    }
    return -1;
}

// 计算给定数组 arr 中所有元素的总和
{
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
}

// 移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组
// 循环数组去重
{
    function remove(arr, item) {
        let result = [];
        for (let i = 0, len = arr.length; i < len; i++) {
            if (arr[i] !== item) {
                result.push(arr[i])
            }
        }
        return result;
    }
}
{
    function remove_filter(arr, item) {
        return arr.filter(function (ele) {
            return ele !== item;
        })
    }

    // function remove(arr,item){
    //     let newarr = arr.slice(0);
    //     for(let i=0;i<newarr.length;i++){
    //         if(newarr[i] == item){
    //             newarr.splice(i,1);
    //             i--;
    //         }
    //     }
    //     return newarr;
    // }
}

/*
* 移除数组 arr 中的所有值与 item 相等的元素，直接在给定的 arr 数组上进行操作，并将结果返回
* 输入：[1, 2, 2, 3, 4, 2, 2], 2
* 输出：[1, 3, 4]
*/
{
    function removeWithoutCopy(arr, item) {
        for (let i = 0; i < arr.length; i++) {
            if (arr.indexOf(item)) {
                arr.splice(arr.indexOf(item), 1)
            }
        }
        return arr;
    }

    function removeWithoutCopy1(arr, item) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                arr.splice(i, 1)
            }
        }
        return arr;
    }
}

// 在数组 arr 末尾添加元素 item。不要直接修改数组 arr，结果返回新的数组
{
    function append(arr, item) {
        let len = arr.length,
            result = [];

        for (let i = 0; i < len; i++) {
            result.push(arr[i]);
        }

        result.push(item);
        return result;
    }

    function push(arr, ...item) {
        return arr.concat(item);
    }

    /**
     * 使用slice浅拷贝+push组合
     * @param arr
     * @param item
     * @returns {Blob|ArrayBuffer|Array.<T>|string}
     */
    const append2 = function (arr, item) {
        let newArr = arr.slice(0);  // slice(start, end)浅拷贝数组
        newArr.push(item);
        return newArr;
    };
}

// 删除数组 arr 最后一个元素。不要直接修改数组 arr，结果返回新的数组
{
    function truncate1(arr) {
        return arr.slice(0, arr.length - 1)
    }

    //利用slice
    function truncate(arr) {
        return arr.slice(0, -1);
    }

//利用filter
    function truncate2(arr) {
        return arr.filter(function (v, i, ar) {
            return i !== ar.length - 1;
        });
    }

//利用push.apply+pop
    function truncate3(arr) {
        let newArr = [];
        [].push.apply(newArr, arr);
        newArr.pop();
        return newArr;
    }

//利用join+split+pop    注意！！！：数据类型会变成字符型
    function truncate4(arr) {
        let newArr = arr.join().split(',');
        newArr.pop();
        return newArr;
    }

//利用concat+pop
    function truncate5(arr) {
        let newArr = arr.concat();
        newArr.pop();
        return newArr;
    }

//普通的迭代拷贝
    function truncate6(arr, item) {
        let newArr = [];
        for (let i = 0; i < arr.length - 1; i++) {
            newArr.push(arr[i]);
        }
        return newArr;
    }
}

// 在数组 arr 开头添加元素 item。不要直接修改数组 arr，结果返回新的数组
{
    function prepend(arr, item) {
        return [item].concat(arr);
    }

    function prepend1(arr, item) {
        let result = arr.concat(); // arr.slice(0)
        return result.unshift(item);
    }

//使用push.apply
    function prepend2(arr, item) {
        let newArr = [item];
        [].push.apply(newArr, arr);
        return newArr;
    }

//利用slice+unshift/splice
    function prepend3(arr, item) {
        let newArr = arr.slice(0);
        newArr.unshift(item);//newArr.splice(0,0,item);
        return newArr;
    }

//使用join+split+unshift/splice组合
    function prepend4(arr, item) {
        let newArr = arr.join().split(',');
        newArr.unshift(item);//newArr.splice(0,0,item);
        return newArr;
    }
}

// 删除数组 arr 第一个元素。不要直接修改数组 arr，结果返回新的数组
{
    function curtail(arr) {
        return arr.slice(1);
    }

    //利用filter
    function curtail1(arr) {
        return arr.filter(function (v, i) {
            return i !== 0;
        });
    }

//利用push.apply+shift
    function curtail2(arr) {
        let newArr = [];
        [].push.apply(newArr, arr);
        newArr.shift();
        return newArr;
    }

//利用join+split+shift    注意！！！：数据类型会变成字符型
    function curtail3(arr) {
        let newArr = arr.join().split(',');
        newArr.shift();
        return newArr;
    }

//利用concat+shift
    function curtail4(arr) {
        let newArr = arr.concat();
        newArr.shift();
        return newArr;
    }

//普通的迭代拷贝
    function curtail5(arr) {
        let newArr = [];
        for (let i = 1; i < arr.length; i++) {
            newArr.push(arr[i]);
        }
        return newArr;
    }
}

// 合并数组 arr1 和数组 arr2。不要直接修改数组 arr，结果返回新的数组
{
    function concat(arr1, arr2) {
        return arr1.concat(arr2);
    }

    //利用slice+push.apply
    function concat1(arr1, arr2) {
        let newArr = arr1.slice(0);
        [].push.apply(newArr, arr2);
        return newArr;
    }

//利用slice+push
    function concat2(arr1, arr2) {
        let newArr = arr1.slice(0);
        for (let i = 0; i < arr2.length; i++) {
            newArr.push(arr2[i]);
        }
        return newArr;
    }

//普通的迭代拷贝
    function concat3(arr1, arr2) {
        let newArr = [];
        for (let i = 0; i < arr1.length; i++) {
            newArr.push(arr1[i]);
        }
        for (let j = 0; j < arr2.length; j++) {
            newArr.push(arr2[j]);
        }
        return newArr;
    }
}

// 在数组 arr 的 index 处添加元素 item。不要直接修改数组 arr，结果返回新的数组
{
    function insert(arr, item, index) {
        let result = arr.concat(); // [].concat(arr)
        result.splice(index, 0, item);
        return result;
    }

    //利用slice+concat
    function insert1(arr, item, index) {
        return arr.slice(0, index).concat(item, arr.slice(index));
    }

//利用concat +splice
    function insert2(arr, item, index) {
        let newArr = arr.concat();
        newArr.splice(index, 0, item);
        return newArr;
    }

//利用slice+splice
    function insert3(arr, item, index) {
        let newArr = arr.slice(0);
        newArr.splice(index, 0, item);
        return newArr;
    }

//利用push.apply+splice
    function insert4(arr, item, index) {
        let newArr = [];
        [].push.apply(newArr, arr);
        newArr.splice(index, 0, item);
        return newArr;
    }

//普通的迭代拷贝
    function insert5(arr, item, index) {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            newArr.push(arr[i]);
        }
        newArr.splice(index, 0, item);
        return newArr;
    }
}

// 统计数组 arr 中值等于 item 的元素出现的次数
{
    function count(arr, item) {
        let len = arr.length,
            tem = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== item) {
                tem.push(arr[i]);
            }
        }
        let temlen = tem.length;
        return len - temlen;
    }

    function count1(arr, item) {
        let count = 0;
        arr.forEach((v) => {
            if (v === item) {
                count++;
            }
        });
        return count;
    }

    //filter()-->利用指定的函数确定是否在返回的数组中包含某一项
    function count2(arr, item) {
        let count = arr.filter(function (a) {
            return a === item;   //返回true的项组成的数组
        });
        return count.length;
    }

    //map()-->对数组中的每一项进行给定函数，
    //返回每次函数条用的结果组成的数组；
    function count3(arr, item) {
        let count = 0;
        arr.map(function (a) {
            if (a === item) {
                count++;
            }
        });
        return count;
    }

    //for循环
    function count4(arr, item) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                count++;
            }
        }
        return count;
    }

    //reduce()-->从数组的第一项开始，逐个遍历到最后；
    function count5(arr, item) {
        let count;
        count = arr.reduce(function (prev, curr) {
            return curr === item ? prev + 1 : prev;
        }, 0);
        return count;
    }

    //forEach()-->对数组中的每一项运行传入的函数
    function count6(arr, item) {
        let count = 0;
        arr.forEach(function (a) {
            a === item ? count++ : 0;
        });
        return count;
    }

    function count7(arr, item) {
        return arr.filter(function (a) {
            return (a == item);
        }).length
    }
}

// 找出数组 arr 中重复出现过的元素
{
    function duplicates(arr) {
        var tem = [].concat(arr);
        var result = [];
        for (var i = 0; i < arr.length; i++) {
            if (result.indexOf(tem[i]) === -1) {
                result.push(tem[i]);
            }
        }
        return result;
    }

    duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3])
}