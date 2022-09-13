import React from 'react'

function TableData( { name = "DefaultName", age = "DefaultAge", salary = "DefaultSalary", profession = "DefaultProfession",
    working="DefaultCompany" } ) {
  return (
      <>
          <tr scope="row">
              <td>{name}</td>
              <td>{age}</td>
              <td>{profession}</td>
              <td>{working}</td>
              <td>{salary}</td>
          </tr>
          
      </>
  )
}

export default TableData