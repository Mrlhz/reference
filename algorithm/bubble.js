function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                console.log(arr);
            }
        }
    }
    console.log(arr);
}

bubbleSort([2, 5, 9, 3, 6, 8, 7, 1]);

let text = '10 8 3 2 2 4 9 5 4 3';

let result = text.split(' ').map( (value) => parseInt(value));

console.log(bubbleSort(result));
console.log(result,text);