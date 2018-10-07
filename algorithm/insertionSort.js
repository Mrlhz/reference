/*
 * 插入排序
 */

function insertionSort(arr) {
    let len = arr.length,
        current,
        index;
    for (let i = 1; i < len; i++) {
        index = i;
        current = arr[i];
        while (index > 0 && arr[index - 1] > current) {
            arr[index] = arr[index - 1];
            index--;
        }
        arr[index] = current;
        console.log(arr)
    }
    console.log(arr);
}

insertionSort([3, 5, 1, 4, 2]);


/*
 * 希尔排序是插入排序的一种更高效率的实现。它与插入排序的不同之处在于，它会优先比较距离较远的元素。
 * 希尔排序的核心在于间隔序列的设定。既可以提前设定好间隔序列，也可以动态的定义间隔序列。
 * 动态定义间隔序列的算法是《算法（第4版》的合著者Robert Sedgewick提出的。
 * 在这里，我就使用了这种方法。
 */
function shellSort(arr) {
    let len = arr.length,
        temp,
        gap = 1;
    while (gap < len / 3) {          //动态定义间隔序列
        gap = gap * 3 + 1;
    }
    for (gap; gap > 0; gap = Math.floor(gap / 3)) {
        for (let i = gap; i < len; i++) {
            temp = arr[i];
            for (let j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
                arr[j + gap] = arr[j];
            }
            arr[j + gap] = temp;
        }
    }
    return arr;
}