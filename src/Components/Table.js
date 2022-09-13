import React from 'react'
import Data from './Data'
import TableData from './TableData'
// age,salary,profession,working
function Table() {
    const data = Data.map( element => ( <TableData name={element.name}
        age={element.age} salary={element.salary} profession={element.profession} working={element.working} /> ) )
  return (
      <table>
          <caption>Developers Reports</caption>
          <thead>
              <th scope='col'>Name</th>
              <th scope='col'>Age</th>
              <th scope='col'>Profession</th>
              <th scope='col'>Company</th>
              <th scope='col'>Salary</th>
          </thead>
          <tbody>
              { data}
          </tbody>
    </table>
  )
}

export default Table