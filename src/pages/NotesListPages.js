import React from "react";
import notes from "../assets/data";
import ListItem from "../components/listItem";

const NotesListPage = () =>{
    return (
        <div>
        <div></div>
        <ul>{notes.map((note, index) => (
            <ListItem key={index} note={note}/>
        ))}

        </ul>
        </div>
    )
}

export default NotesListPage;
