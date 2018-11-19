{
    // Implement the function unique_in_order which takes as argument a sequence and
    // returns a list of items without any elements with the same value next to each other and
    // preserving the original order of elements.

    // For example:

    // uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
    // uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
    // uniqueInOrder([1,2,2,3,3])       == [1,2,3]
    let uniqueInOrder = function (iterable) {
        // TODO: your code here - remember iterable can be a string or an array
        let result = [];
        for (let i = 0; i < iterable.length; i++) {
            if (result.indexOf(iterable[i]) === -1){
                result.push(iterable[i]);
            }
        }
        return result || [1];
    };

    console.log(uniqueInOrder('AAAABBBCCDAABBB'));
    console.log(uniqueInOrder('ABBCcAD'));
    console.log(uniqueInOrder([1,2,2,3,3]));
}

{
    var str = [1,2,2,3,3]
    var arr = []
    for (let i = 0; i < str.length; i++) {
        if(str[i] === str[i+1]){
            continue;
        }
        arr.push(str[i])
    }
    console.log(arr)
}

{
    // https://github.com/msachi/codewars
    var sort = (arr) => arr.sort( (x,y) => x-y)
    var sum = (arr) => {
        var [one, two] = arr.sort( (x,y) => x-y)
        return one + two;
    }
}

{
    var s = 'abcba'
    function ishuiwen(str){
        return str === str.split('').reverse().join()
    }
}