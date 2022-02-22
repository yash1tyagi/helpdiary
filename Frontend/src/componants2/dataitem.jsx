import React, { useContext } from 'react';
import NoteContextTwo from '../context2/notes2/notecontext'

export const Dataitem = (props) => {
  const {note} = props
  const context = useContext(NoteContextTwo)
  const {deleteNote} = context
  return <div>
 <table className="table">
  <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Add</th>
      <th scope="col">Less</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
  {/* {notes.lenght===0 && "No Notes to display"} */}
    <tr>
      <td>{note.date}</td>
      <td>{note.title}</td>
      <td>{note.titleLess}</td>
      <td><button  className="btn btn-primary btn-sm" onClick={()=>{deleteNote(note._id)}} >Delete</button></td>
    </tr>
  </tbody>
</table>
  </div>
};
