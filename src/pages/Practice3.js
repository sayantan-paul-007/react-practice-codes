import React  from 'react'
// Creating Component using createElement() 
const Practice3 = () => {
  return  React.createElement('div', {id:'prac-3', className: 'new'},
  React.createElement('h1', null, "Practice3")
  )
}

export default Practice3