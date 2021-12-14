//Checking Avaibility of ReactJS
console.log(React)
console.log(ReactDOM)

const root = document.querySelector('#root')
// ReactDOM.render('Hello World', root)

const element = React.createElement('div', null, 'Hello World !')
ReactDOM.render(element, root)