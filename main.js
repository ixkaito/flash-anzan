var size = 10;
var question = document.getElementById('js-question');
var solution = document.getElementById('js-solution');
var answer, i, timer, rand;
solution.value = '';

function start() {
  clearTimeout(timer);
  answer = 0;
  i = 0;
  solution.value = '';
  flash();
}

function flash() {
  rand = Math.floor((Math.random() * 99) + 1);
  if (i < size) {
    timer = setTimeout(function() {
      question.innerHTML = rand;
      answer += rand;
      setTimeout(function() {
        question.innerHTML = '';
      }, 700);
      flash();
    }, 1000);
    i++;
  } else {
    clearTimeout(timer);
  }
}

function verify() {
  if (solution.value == answer) {
    alert('正解！');
  } else if (answer) {
    alert('残念、不正解...');
  }
}

function showanswer() {
  alert('正解は ' + answer + ' です。');
}
