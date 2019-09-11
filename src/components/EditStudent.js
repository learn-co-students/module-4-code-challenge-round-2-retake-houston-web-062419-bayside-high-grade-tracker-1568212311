import React from 'react'
// import Student from "./Student";

const EditStudent = (props) => {

  return (
    <form
      className="ui form center aligned sixteen wide column"
      onSubmit={null}
      
    >
      <div className="inline fields">
        <div className="four wide field">
          <input
            id="name"
            type="text"
          />
        </div>
        <div className="four wide field">
          <input
            id="class_year"
            type="number"
          />
        </div>
        <div className="four wide field">
          <input
            id="percentage"
            type="number"
          />
        
        </div>
        {/* {props.currentStudent.map(student=> <Student {...student}/>)} */}
       
        <button className="ui button" type="submit" >
          Submit
        </button >
      </div>
    </form>
  )
}

export default EditStudent
