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
  paint(getRandomColor());
});

input.addEventListener('keyup', (e) => {
  paint(e.target.value);
});

target.addEventListener('mouseover', () => {
  const colorInterval = setInterval(() => {
    paint(getRandomColor());
    console.log('mouse in');
  }, 500);
  target.addEventListener('mouseout', () => {
    clearInterval(colorInterval);
  });
});

const paint = (val) => {
  target.textContent = '';
  input.value = val;
  root.style.setProperty('--color', val);
  input.style.color = val;
  target.style.backgroundColor = val;
};

const getRandomColor = () => {
  let color = '#';
  for (let i = 0; i < 6; i++) {
    const randomValue = Math.floor(Math.random() * 16);
    color += `${colorChars[randomValue]}`;
  }
  return color;
};
