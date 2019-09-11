import React, { Component } from "react";
import CourseSelector from "./CourseSelector";
import EditStudent from "./EditStudent";
import StudentsList from "./StudentsList";

class CourseContainer extends Component {
  constructor() {
    super();
    this.state = {
      students: [],
      currentCourse: {},
      currentStudent: {},
      courses: []
    };
  }

  componentDidMount() {
    fetch("https://warm-shore-17060.herokuapp.com/api/v1/users/68/courses/165")
      .then((res) => res.json())
      .then((students) => {
        console.log(students.students);
        this.setState({
          students: students.students,
          courses: []
        });
      });
  }

  editChange = (e) => {
    e.preventDefault();
    let edit = {
      name: e.target[0].value,
      class_year: e.target[1].value,
      parcentage: e.target[2].value
    };
    let submit = [...this.state.students, edit];
    this.setState({
      currentStudent: submit
    }, console.log(this.state.currentStudent));
    console.log('yes')
  };


  handleEdit=(id)=>{
 let find= this.state.students.find( student=> student.id===id)
  // let final= [...this.state.students, find]
  this.setState({
    currentStudent: find
  })
  }

  render() {
    return (
      <div className="ui grid container">
        <div className="ui center aligned header sixteen wide column">
          {/* Course Title Here */}
          Course Title
        </div>

        <CourseSelector />

        <EditStudent currentStudent={this.state.currentStudent}/>

        <StudentsList students={this.state.students} handleEdit={this.handleEdit} />
      </div>
    );
  }
}

export default CourseContainer;
