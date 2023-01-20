import React from "react";
import notes from "../assets/data";
import ListItem from "../components/listItem";
import { Link } from "react-router-dom";

const NotesListPage = () =>{
    return (
        <div className="notes">
        <div className="notes-list">
       
        <div className="notes-header">

        <h2 className="notes-header notes-title">&#9782; Notes </h2>

        <p className="notes-count">{notes.length}</p>

        </div> 
       
        <ul>{notes.map((note, index) => (
            <ListItem key={index} note={note}/>
        ))}

        </ul>
        </div>
        </div>
    )
}

export default NotesListPage;
