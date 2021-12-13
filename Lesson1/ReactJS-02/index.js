// Single Component

// const root = document.querySelector('#root')

// const Increment = () => {
//     const [increment, setIncrement] = React.useState(0)
//     // console.log(increment)
//     return (
//         <div>
//             <h4>{increment}</h4>
//             <button onClick={() => setIncrement(increment + 1)}>Increment</button>
//         </div>
//     )
// }

// ReactDOM.render(<Increment />, root)

// Multiple Components

const root = document.querySelector('#root')

const Increment = () => {
    const [increment, setIncrement] = React.useState(0)
    // console.log(increment)
    return (
        <div>
            <h4>{increment}</h4>
            <button onClick={() => setIncrement(increment + 1)}>Increment</button>
        </div>
    )
}

ReactDOM.render(
    <div className="container">
        <Increment />
        <Increment />
        <Increment />
    </div>
    , root)

