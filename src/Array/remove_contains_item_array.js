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