var size = 10;
var display = document.getElementById('js-display');
var answer, i, timer, rand;
display.value = '';

function flash() {
  rand = Math.floor((Math.random() * 99) + 1);
  if (i < size) {
    timer = setTimeout(function() {
      display.value = rand;
      answer += rand;
      setTimeout(function() {
        display.value = '';
      }, 700);
      flash();
    }, 1000);
    i++;
  } else {
    clearTimeout(timer);
  }
}

function start() {
  clearTimeout(timer);
  display.value = '';
  answer = 0;
  i = 0;
  flash();
}

function submit() {
  if (display.value == answer) {
    alert('正解！');
  } else if (answer) {
    alert('残念、不正解...');
  }
}

function showanswer() {
  alert('正解は ' + answer + ' です。');
}
