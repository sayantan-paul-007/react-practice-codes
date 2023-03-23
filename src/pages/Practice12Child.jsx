import React from 'react'

function Practice12Child(props) {
  return (
    <div>
        <button onClick={()=> props.greetHandler('username')}>Greet Yourself</button>
    </div>
  )
}

export default Practice12Child