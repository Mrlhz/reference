var arr = new Array(100);
for (var i = 0; i < arr.length; i++) {
  arr[i] = i;
}
console.log(arr);

Array.from({length:1,0:'a'})

var class2type = {};
"Boolean Number String Function Array Date RegExp Object Error".split(" ").forEach(name => {
  class2type[ "[object " + name + "]" ] = name.toLowerCase()
})




