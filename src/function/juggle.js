/*
 * call
 * Function.prototype.apply() //
 * bind
 */

function juggle() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
        console.log(this, arguments[i]);
    }
    this.result = result;
}

let o1 = {};
let o2 = {};

juggle.apply(o1, [1, 2, 3, 4]);
juggle.call(o2, 4, 5, 6, 7);

console.log(o1.result === 10, "apply");
console.log(o2.result === 22, "call");


var numbers = [5, 6, 2, 3, 7];

/* using Math.min/Math.max apply */
var max = Math.max.apply(null, numbers);
