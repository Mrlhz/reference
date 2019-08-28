/**
 * @description 队列是遵循FIFO（First In First Out，先进先出，也称为先来先服务）原则
 *
 */
function Queue() {

  var items = []

  this.enqueue = function (element) {
    items.push(element)
  }

  this.dequeue = function () {
    return items.shift()
  }

  this.front = function () {
    return items[0]
  }

  this.isEmpty = function () {
    return items.length == 0
  }

  this.clear = function () {
    items = []
  }

  this.size = function () {
    return items.length
  }

  this.print = function () {
    console.log(items.toString())
  }
}