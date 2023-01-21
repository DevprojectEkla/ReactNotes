import React from "react";
import { Link } from "react-router-dom";

let formatDate = (date) => {
    let split = date.split(' ') 
    return `le ${split[0]} à ${split[1]}`

}
let getDate = (note) => {
    return formatDate(new Date(note?.updated).toLocaleString())
}

// let getTime = (note) => {
//     return new Date(note?.updated).toTimeString()
// }


let getTitle = (note) => {
    const title = note.body?.split('\n')[0]
    if (title.length > 45) {
        return title.slice(0,45)
    }
    return title
}

const ListItem = ({note}) => {
    return ( <div className="notes-list-item">
        <Link to={`/note/${note.id}`}> 
        <ul>
        <h2>{getDate(note)}</h2>
        <h3>{getTitle(note)}</h3>
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
