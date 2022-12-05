const btn = document.querySelector('.color-input button')
const colorInput = document.querySelector('.color-input input')
const target = document.querySelector('.target')
const input = document.querySelector('.color-input input')
const colorChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']


console.log(btn, colorInput);

btn.addEventListener('click', () => {
    let color = '#';
    for (let i = 0; i < 6 ; i++) {
        const randomValue = Math.floor(Math.random() * 16)
        color += `${colorChars[randomValue]}`
        console.log(randomValue)
    }
    input.value = color
        target.style.backgroundColor = color
})