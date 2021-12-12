const btn = document.querySelector('.increment')
const dis = document.querySelector('.display')
let count = 0
btn.addEventListener('click', () => {
    count++
    dis.innerHTML = count
})