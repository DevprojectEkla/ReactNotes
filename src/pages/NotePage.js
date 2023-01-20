import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

import notes from "../assets/data";
import Arrowleft from "../assets/arrow-left.svg";
const NotePage = (props) => { 

    let noteId = useParams().id;
    let location = useLocation();
    let note = notes.find(note => note.id === Number(noteId) ) 
    console.log('note ID', noteId, note,'location', location)
    return ( 

    
    <div className="note">
            
        <div className="note-header">    
        <h3>
            <Link to="/"><Arrowleft/> </Link>
        </h3>
        </div>
        <h2> Note {note.id}</h2>
        <textarea value={note?.body}>
        </textarea>
            <p>{note.body}, {note.updated}</p>
        
            </div>)
};

export default NotePage;
