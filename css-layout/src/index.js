// import {
//   info
// } from './data'
var inf0 = require('./data.js')

let {
  lst
} = info

let list = document.getElementById('list')

lst.map((item) => {
  if (item.name) {
    // console.log(item)
    let li = document.createElement('li')
    li.className = item.name
    li.innerText = item.text


    //
    let content = document.createElement('div')
    content.className = item.name + '_content'
    content.innerText = item.text
    content.style.color = 'red'
    content.classList.toggle('hide')
    //

    li.addEventListener('click', function (e) {
      let target = document.querySelector(`.${e.target.getAttribute('class')}_content`)
      target.classList.toggle('hide')
    })
    list.appendChild(li)
    list.appendChild(content)
  }
})

var ninja = function myNinja(){                                  //#1
  console.log(this)
};

ninja()


console.log(typeof myNinja == "undefined")