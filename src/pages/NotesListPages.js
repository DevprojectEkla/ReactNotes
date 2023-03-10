import React, {useEffect, useState} from "react";
// import notes from "../assets/data";
import ListItem from "../components/listItem";
import { Link } from "react-router-dom";
import AddButton from "../components/AddButton"

const NotesListPage = () =>{

    let [notes,setNotes] = useState([])

    useEffect(() => {
        getNotes()

    }, [])

    let getNotes = async () =>  {
       let response = await fetch('http://localhost:8000/notes/')
        let data = await response.json()
        console.log("data:",data )
        setNotes(data)
    }


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
        <AddButton />
        </div>
    )
}

export default NotesListPage;
