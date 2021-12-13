let display = document.querySelector('#root')
let arr = []
let increment = 0

// //fast
// while (increment < 1000) {
//     arr.push(++increment)
// }

// display.innerHTML = arr.join(' ') 

// //fast
// while (increment < 1000) {
//     arr.push(increment++)
// }

// display.innerHTML = arr.join(' ') 

// // slow
// while (increment < 1000) {
//    increment++
//    display.innerHTML += increment + ' '
// }