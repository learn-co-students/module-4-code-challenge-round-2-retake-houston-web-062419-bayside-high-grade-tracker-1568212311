import React from 'react'

const Student = (props) => {

  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.percentage}</td>
      <td>{props.class_year}</td>
      <td>
        <button className="ui button left" onClick={()=>props.handleEdit(props.id)}>
          Edit
        </button>
      </td>
    </tr>

  )
}

export default Student
