import React from 'react'

const Form:React.FC = () => {
  return (
    <div>
        <h1>form component</h1>
        <div>
          <label htmlFor="name">name</label>
          <input type="text" id='name' />
        </div>

      <button>click</button>

    </div>
  )
}

export default Form