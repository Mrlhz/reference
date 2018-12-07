var count = 1;
var container = document.getElementById('container');

function getUserAction() {
    container.innerHTML = count++;
};

// container.onmousemove = getUserAction;

// 第一版
function debounce(fn, wait) {
  var timer;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(fn, wait);
  }
}

container.onmouseover = debounce(getUserAction, 1000);

