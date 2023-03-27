import React from 'react'
import StudentTable from './StudentTable'
// This is the implementation of keys and list rendering in a table
const StudentData = () => {
    const students = [
        {
            roll:1,
            name:'Pawan',
            age:12,
            class:6
        },
        {
            roll:2,
            name:'Jolly',
            age:13,
            class:7
        },
        {
            roll:3,
            name:'Jiya',
            age:12,
            class:5
        },
        {
            roll:4,
            name:'Agni',
            age:12,
            class:6
        },
        {
            roll:5,
            name:'Agni',
            age:12,
            class:6
        },
        {
            roll:5,
            name:'Agni',
            age:12,
            class:6
        },
        {
            roll:5,
            name:'Agni',
            age:12,
            class:6
        }
    ]
    const studData= students.map((student,index) => <StudentTable key={index} student={student}></StudentTable>)
// key is a reserved prop and it won't act in any component if you pass value after assigning it
// Key basically helps to identify the identity of the data same as "PRIMARY KEY" in SQL (No duplication)
  return (
    <div>
         <table style={{borderStyle:'dashed'}}>
            <tr style={{borderStyle:'dashed'}}>
                <th>Roll</th>
                <th>Name</th>
                <th>Age</th>
                <th>Class</th>
            </tr>  
           
        {studData}
      
        </table>
        </div>
  )
}

export default StudentData