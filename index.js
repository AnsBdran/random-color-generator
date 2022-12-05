const btn = document.querySelector('.color-input button');
const colorInput = document.querySelector('.color-input input');
const target = document.querySelector('.target');
const input = document.querySelector('.color-input input');
const root = document.querySelector(':root');
const colorChars = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
];

btn.addEventListener('click', () => {
  let color = '#';
  for (let i = 0; i < 6; i++) {
    const randomValue = Math.floor(Math.random() * 16);
    color += `${colorChars[randomValue]}`;
  }
  paint(color);
});

input.addEventListener('keyup', (e) => {
  paint(e.target.value);
});

const paint = (val) => {
  target.textContent = '';
  input.value = val;
  root.style.setProperty('--color', val);
  input.style.color = val;
  target.style.backgroundColor = val;
};
