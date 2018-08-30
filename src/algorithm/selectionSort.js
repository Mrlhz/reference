/*
* https://www.cnblogs.com/Unknw/p/6346681.html
*/
function selectionSort(arr) {
    let len = arr.length,
        min_index;
    for (let i = 0; i < len - 1; i++) {
        min_index = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[min_index] > arr[j]) {  // 寻找最小的数
                min_index = j;  // 将最小数的索引保存
            }
        }
        [arr[i], arr[min_index]] = [arr[min_index], arr[i]];
    }
    console.log(arr);
    return arr;
}

function selectionSort1(arr) {
    let len = arr.length;
    let minIndex, temp;
    for (let i = 0; i < len - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < len; j++) { // TODO i + 1
            if (arr[j] < arr[minIndex]) {     //寻找最小的数
                minIndex = j;                 //将最小数的索引保存
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    console.log(arr);
    return arr;
}

selectionSort([2, 5, 9, 3, 6, 8, 7, 1]);
selectionSort1([2, 5, 9, 3, 6, 8, 7, 1]);

console.log('https://www.cnblogs.com/Unknw/p/6346681.html');