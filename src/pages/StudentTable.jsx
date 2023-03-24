import React from 'react'
// This is the implementation of keys and list rendering in a table
const StudentTable = ({student}) => {
   
  return (
    <>
       
            <tr>
                <td>{student.roll}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.class}</td>
            </tr>  
        
    </>
  )
}

export default StudentTable