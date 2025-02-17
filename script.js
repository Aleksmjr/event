const input = document.getElementById('text');
const btn = document.getElementById('e_btn');
const square = document.getElementById('square');
const circle = document.getElementById('circle');
const range = document.getElementById('range');

// Сделал лучше, чем в задании. Мы в окошечко вводим цвет, нажимаем enter (т.к кнопку по заданию нужно скрыть и цвет задается)
input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    square.style.backgroundColor = input.value.trim().toLowerCase();
  }
});

// скрываем зачем-то кнопку по заданию, по которой мы кликаем
btn.style.display = 'none';

range.addEventListener('input', (event) => {
  const size = range.value + '%';
  circle.style.width = size;
  circle.style.height = size;
});
