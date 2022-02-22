
import { useState, useContext } from 'react';
import NoteContext from '../context/notes/noteContext'

export const AddNote = () => {
    const context = useContext(NoteContext)
    const {addNote} = context
    const[note, setNote] = useState({title:""})
    const handleClick = (e) =>{
        e.preventDefault();
        addNote(note.title);
        setNote({title:""})
    }
    const onChange = (e) =>{
        setNote({...note, [e.target.name]: e.target.value})
    }
  return <div className= 'container my-3'>
              <form>
            <div className="my-2">
                <label htmlFor="title" className="form-label">Name</label>
                
                <input type="text" value={note.title} className="form-control " id="title" name="title" aria-describedby="emailHelp"onChange={onChange} />
                
            <button type="submit" className="btn btn-primary" onClick={handleClick}>+</button>
            </div>
        </form>
  </div>;
};
