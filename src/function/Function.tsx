import React from 'react'

interface IFunction {
    count:number
    increment?:() => void
    decrement?:() => void
}

const Function:React.FC<IFunction> = ({count,decrement,increment}) => {
  return (
    <div>
        <h1>CountFunc</h1>
        <p>{count}</p>

        {increment && <button onClick={increment}>increment</button>}
        {decrement && <button onClick={decrement}>decrement</button>}

    </div>
  )
}

export default Function