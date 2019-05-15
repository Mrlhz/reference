/**
 * @description 模拟分页
 * @author lhz
 * @date 2019-5-15
 */

// 生成数组

let page_list = Array.from({ length: 16 }, (v, i) => i + 1)
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

let get_list_by_page = function (list, page, size){
  let max = page * size - 1
  let min = max - size + 1
  return list.filter((ele, i) => i >= min && i <= max)
}

function getListByPage(page, num){
  var list = Array.from({length: 16}, (v, i) => i + 1)
  var total = list.length
  var pageSize = Math.ceil(total / num)
  console.log(pageSize);
  var res = list.slice((page -1) * num, (page -1) * num + num)
  console.log(res);
}

getListByPage(1,5)
getListByPage(2,5)
getListByPage(3,5)
getListByPage(4,5)
getListByPage(2,6)