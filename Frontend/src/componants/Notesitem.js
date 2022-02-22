import { useContext } from 'react';
import { Link } from "react-router-dom";
import NoteContext from '../context/notes/noteContext'
import NoteContextTwo from '../context2/notes2/notecontext'
function Notesitem(props) {
  const context = useContext(NoteContext)
  const {deleteNote} = context
  const contextTwo = useContext(NoteContextTwo)
  const {  getData } = contextTwo
    const {note, updateNote} = props

  return <div className="col-md-3">
  <div className="card my-3">
  <div className="card-body">
    <h5 className="card-title">{note.title}</h5>
    <i className="fas fa-trash-alt mx-2" onClick={()=>{deleteNote(note._id)}}></i>
    <i className="far fa-edit mx-2" onClick={()=>{updateNote(note)}}></i>
    <Link className="btn btn-primary mx-1" to={"/data/"+note._id }role="button">Data</Link>
  </div>
</div>
</div>
}

export default Notesitem;
