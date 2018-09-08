// 找出数组 arr 中重复出现过的元素
function duplicates(arr) {
  let result = [];
  arr.forEach(function (elem) {
      if (arr.indexOf(elem) !== arr.lastIndexOf(elem) && result.indexOf(elem) === -1) {
          console.log(arr.indexOf(elem), arr.lastIndexOf(elem));
          result.push(elem);
      }
  });
  return result;
}

duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]);


function duplicates1(arr) {
  let seen = {};
  let dupes = [];///

  for (let i = 0, len = arr.length; i < len; i++) {
      seen[arr[i]] = seen[arr[i]] ? seen[arr[i]] + 1 : 1;
  }
  for (let item in seen) {
      if (seen.hasOwnProperty(item) && seen[item] > 1) {
          dupes.push(item);
      }
  }

  return dupes;
}

function duplicates2(arr) {
  //声明两个数组，a数组用来存放结果，b数组用来存放arr中每个元素的个数
  let a = [], b = [];
  //遍历arr，如果以arr中元素为下标的的b元素已存在，则该b元素加1，否则设置为1
  for (let i = 0; i < arr.length; i++) {
      if (!b[arr[i]]) {
          b[arr[i]] = 1;
          continue;
      }
      b[arr[i]]++;
  }
  //遍历b数组，将其中元素值大于1的元素下标存入a数组中
  for (let i = 0; i < b.length; i++) {
      if (b[i] > 1) {
          a.push(i);
      }
  }
  return a;
}

function duplicates3(arr) {
  let a = arr.sort(), b = [];
  for (let i in a) {
      if (a[i] === a[i - 1] && b.indexOf(a[i]) === -1) b.push(a[i]);
  }
  return b;
}//先排序，如果后一个与前一个相等且未保存，则保存