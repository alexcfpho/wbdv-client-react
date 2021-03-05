import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

const EditableItem = (
    {
        // This to is overridden when passed the prop depending where the Component is invoked.
        to = "/somewhere/to/go",
        deleteItem,
        updateItem,
        // @TODO WIP
        // findItem,
        item = {title: "Some Title", _id: "ABC"},
        active,
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
                        {/*{JSON.stringify(active)}*/}
                        <FontAwesomeIcon icon={"edit"} onClick={() => setEditing(true)} pull={"right"}/>
                    </Link>
                </>
            }
            {
                editing &&
                <>
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
                                         // @TODO WIP
                                         // findItem(item._id)
                                     }}/>
                    <FontAwesomeIcon icon={"times"} pull={"right"}
                                     onClick={() => deleteItem(item)}/>
                </>
            }
        </>
    )
}
export default EditableItem
