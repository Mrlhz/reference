/*
 * Function.prototype.apply() //
 */

// func.apply(thisArg:在 func 函数运行时使用的 this 值, [argsArray:一个数组或者类数组对象])
// 如果这个函数处于非严格模式下，则指定为 null 或 undefined 时会自动替换为指向全局对象（浏览器中就是window对象），
// 同时值为原始值（数字，字符串，布尔值）的 this 会指向该原始值的包装对象
let numbers = [5, 6, 2, 3, 7];

/* using Math.min/Math.max apply */
let max = Math.max.apply(null, numbers);