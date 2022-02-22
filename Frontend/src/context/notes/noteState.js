import NoteContext  from "./noteContext";
import { useState } from 'react'
const port = process.env.PORT || 5000

const NoteState = (props)=>{
  const host =  `http://localhost:${port}`
  const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)
    const getNotes = async()=>{
        // get a note 
          const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers:{
              'Content-Type': 'application/json',
              'auth-token': localStorage.getItem('token')
      
            },
          //  body: JSON.stringify({title,description, tag})
      
          })
          const json = await response.json();
          console.log(json);
          setNotes(json);
        }
    // Add a note 
    const addNote =async (title, description, tag)=>{
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
  
        },
        body: JSON.stringify({title,description, tag})
  
      })
      const note = await response.json();
      setNotes(notes.concat(note))
    }
    // Delete a note
    const deleteNote =async (id)=>{
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: 'DELETE',
        headers:{
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
  
        }
      });
      const json = response.json();
      console.log(json)
      console.log("Deleting notes"+ id);
      const newNote = notes.filter((note)=>{return note._id!==id})
      setNotes(newNote)
    }
    // Edit a note
    const editNote =async (id, title, description, tag)=>{
    // API call
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'PUT',
        headers:{
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')

        },
        body: JSON.stringify({title,description, tag})

      })
      const json = response.json()
      let newNote = JSON.parse(JSON.stringify(notes))
      console.log(json)
    // Logic to edit a note
      for (let index = 0; index < notes.length; index++) {
        const element = notes[index];
        if (element._id===id) {
          newNote[index].title= title;
          newNote[index].description= description;
          newNote[index].tag= tag;
          break;
        }
      }
      setNotes(newNote);
    }
  
return(
    <NoteContext.Provider value = {{notes, addNote, deleteNote, editNote, getNotes}}>
        {props.children}
    </NoteContext.Provider>
)
}

export default NoteState 