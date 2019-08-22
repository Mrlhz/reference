let arr1 = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2']
let arr2 = ['A', 'B', 'C', 'D']
// ['A1', 'A2', 'A', 'B1', 'B2', 'B', 'C1', 'C2', 'C', 'D1', 'D2', 'D']


function concat(arr1, arr2) {
  let temArr = arr2.map((item) => item + 3)
  let res = temArr.concat(arr1).sort().map((item) => {
    if (item[1] === '3') {
      return item[0]
    }
    return item
  })
  console.log(res);
  return res
}

concat(arr1, arr2)