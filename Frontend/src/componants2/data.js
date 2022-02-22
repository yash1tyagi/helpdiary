import React, { useContext } from 'react';
import { Adddata } from './adddata';
import { Dataitem } from './dataitem';
import {  useEffect} from 'react';
import NoteContextTwo from '../context2/notes2/notecontext'
import { useParams } from "react-router-dom"
// import { Navigate } from 'react-router-dom';

export default function Data() {
    const context = useContext(NoteContextTwo)
    const { notes, getData } = context
    let { id } = useParams();
    useEffect(() => {
            getData(id);
        
  //eslint-disable-next-line
    }, [])
    console.log(notes)
    const sumall = notes.map(item => item.title).reduce((prev, curr) => prev + curr, 0);
console.log(sumall);
const sumLess = notes.map(item => item.titleLess).reduce((prev, curr) => prev + curr, 0);
console.log(sumLess);
let total = sumall-sumLess
    return (
        <div div className='container'>
            <Adddata />
            <h1 className="d-flex justify-content-center">{total}</h1>
            <div className="d-flex justify-content-between">
           <h1 className="d-flex flex-row bd-highlight mb-3">{sumall}</h1>
           <h1 className="d-flex flex-row-reverse bd-highlight">{sumLess}</h1>
           </div>
            {
                notes.map((notes) => {
                    // return <li>{notes.title}</li>
                    return <Dataitem key={notes._id} note={notes} />
                })
            }
        </div>
    )
}