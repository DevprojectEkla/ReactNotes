import React from "react";
import { Link } from "react-router-dom";


const ListItem = ({note}) => {
    return ( <div className="notes-list-item">
        <Link to={`/note/${note.id}`}> 
        <ul>
        <h3>{note.body}</h3>
        </ul>
</Link>
        </div>
    )
}
// another way of doing it with props
// const ListItem = (props) => {
//     return (
//         <div> 
//         <h3>Note {props.note.id}</h3>
//         <ul>
//         <li>{props.note.body}</li>
//         </ul>

//         </div>
//     )
// }

export default ListItem;
