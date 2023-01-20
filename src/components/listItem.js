import React from "react";

const ListItem = ({note}) => {
    return (
        <div> 
        <h3>Note {note.id}</h3>
        <ul>
        <li>{note.body}</li>
        </ul>

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
