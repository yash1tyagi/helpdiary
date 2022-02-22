import { useContext, useState } from 'react';
//import NoteContextTwo from '../context2/notes2/notecontext'
import NoteContextTwo from '../context2/notes2/notecontext'
import NoteContext from '../context/notes/noteContext'
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
export const Adddata = () => {
    const ContextTwo = useContext(NoteContextTwo)
    const { addData } = ContextTwo
    const context = useContext(NoteContext)
    const { notes } = context
    const [note, setNote] = useState({title:"", titleLess:""})
    const { id } = useParams();
    const handleClick = (e) =>{
        e.preventDefault();
        let a = 0
        const int = parseFloat(note.title)|| (isNaN(a))
        const intLess = parseFloat(note.titleLess)|| (isNaN(a))
        addData(int, intLess, id);
        console.log("tyagi ji")
        setNote({title:"", titleLess:""})
         
    }
    
    const onChange = (e) =>{
        setNote({...note, [e.target.name] : e.target.value})
        console.log("yash tyagi")
    }
    return <div className='container'>
         {/* <h1>Note id {id}</h1> */}

        <form onSubmit={handleClick}>
            <div  className="mb-3" >
            <Link to="/"><h1>Home</h1></Link>
                <label htmlFor="title" className="form-label">Add</label>
                <input type="text" className="form-control" onChange={onChange}  id="title" name="title" aria-describedby="emailHelp"/>
                <label htmlFor="titleLess" className="form-label">Less</label>
                <input type="text" className="form-control" onChange={onChange}  id="titleLess" name="titleLess" aria-describedby="emailHelp"/> 
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>;
};
