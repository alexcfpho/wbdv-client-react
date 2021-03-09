import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

const EditableItem = (
    {
        to = "/somewhere/to/go",
        deleteItem,
        updateItem,
        item = {title: "Some Title", _id: "ABC"},
        active
    }) => {
    const [editing, setEditing] = useState(false)
    const [cachedItem, setCachedItem] = useState(item)
    return (
        <>
            {
                !editing &&
                <>
                    <Link className={`nav-link ${active ? 'active' : ''} `} to={to}>
                        {item.title}
                        <FontAwesomeIcon icon={"edit"} onClick={() => setEditing(true)} pull={"right"}/>
                    </Link>
                </>
            }
            {
                editing &&
                <>
                    <div className="col-12 btn-primary btn p-3">
                        <input
                            onChange={(e) =>
                                setCachedItem({
                                    ...cachedItem,
                                    title: e.target.value
                                })}
                            value={cachedItem.title}
                        />
                        <FontAwesomeIcon icon={"check"} pull={"right"}
                                         onClick={() => {
                                             setEditing(false);
                                             updateItem(cachedItem)
                                         }}/>
                        <FontAwesomeIcon icon={"times"} pull={"right"}
                                         onClick={() => deleteItem(item)}/>
                    </div>
                </>
            }
        </>
    )
}
export default EditableItem
