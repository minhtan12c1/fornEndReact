import React, { Component } from 'react'
import classes from './Table.css';

class Tables extends Component {
  constructor(props) {
    super(props)
    this.state = {
      students: [
        { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
        { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
        { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
        { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' },
      ],
    }
  }
  renderTableData() {
    return this.state.students.map((student, index) => {
      const { id, name, age, email } = student
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{age}</td>
          <td>{email}</td>
        </tr>
      )
    })
  }
  renderTableHeader() {
    const header = Object.keys(this.state.students[0])
    return header.map((key, index) => <th key={index}>{key.toUpperCase()}</th>)
  }

  render() {
    return (
       <div>
          <h1 className={classes.Title}>React Dynamic Table</h1>
          <table className={classes.Students} >
             <thead>{this.renderTableHeader()}</thead>
             <tbody>{this.renderTableData()}</tbody>
          </table>
       </div>
    )
 }
}

export default Tables