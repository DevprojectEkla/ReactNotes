import React, {useEffect, useState} from "react";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";

// import notes from "../assets/data";
import Arrowleft from "../assets/arrow-left.svg";
const NotePage = ({history}) => { 
    let navigate = useNavigate() 
    let noteId = useParams().id;
    let location = useLocation();
    
    let [note, setNote] = useState([])

    useEffect ( () => {
        getNote()

        },[]
    )

    let getNote = async () => {
        if(noteId == 'new'){return}
        let response = await fetch("http://localhost:8000/notes/"+`${noteId}`)
        let data = await response.json()
        setNote(data)
    }

    let updateNote = async () => {

        await fetch("http://localhost:8000/notes/"+`${noteId}`,
            {
                method: 'PUT'  ,
        headers: {'Content-type': 'application/json'
        },
            body: JSON.stringify({...note,'updated': new Date()})
        

    })}

    let handleSubmit = () => {
        if (noteId !== 'new' && !note.body){
            deleteNote()
        }
        else if (noteId !== 'new'){
        updateNote()
        navigate('/')
    }
        else if (noteId == 'new' && note !== null){
            createNote()
            navigate('/')
        }
    }


    let createNote = async () =>
    {
        await fetch("http://localhost:8000/notes/",
            {
                method: 'POST'  ,
                headers: {'Content-type': 'application/json'
                            },
                body: JSON.stringify({...note,'updated': new Date()})
            })

    }

    let deleteNote =  async () => 
    {
        await fetch("http://localhost:8000/notes/"+`${noteId}`,
            {
                method: 'DELETE'  ,
        headers: {'Content-type': 'application/json'
        },
            body: JSON.stringify(note)
        

    })
    navigate('/')
    }


       // let note = notes.find(note => note.id === Number(noteId) ) 
    console.log('note ID', noteId, note,'location', location)
    return ( 

    
    <div className="note">
            
        <div className="note-header">    
        <h3>
            <Link to="/"><Arrowleft onClick = {handleSubmit}/> </Link>
        </h3>
        {noteId !== 'new' ? (<button onClick={deleteNote}> Delete</button>): (<button onClick={handleSubmit}>Done !</button>)} 
        
        </div>
        <h2> Note {note.id}</h2>
        <textarea onChange={(e)=>{setNote({...note, "body":e.target.value})}} value={note?.body}>
        </textarea >
            <p>{note.body}, {note.updated}</p>
        
            </div>)
};

export default NotePage;
