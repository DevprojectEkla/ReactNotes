import React from "react";
import { Link } from "react-router-dom";
import AddNew from "../assets/addNew.svg"


const AddButton = () => {
return (

    <Link to="note/new" className="floating-button">
    <AddNew/>
    </Link>
)
}

export default AddButton
