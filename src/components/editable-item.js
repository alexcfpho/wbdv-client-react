import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";

const EditableItem = (
    {
        to = "/somewhere/to/go",
        deleteItem,
        updateItem,
        item = {title: "Some Title", _id: "ABC"},
        hungryClassName
    }) => {
    const [editing, setEditing] = useState(false)
    const [cachedItem, setCachedItem] = useState(item)
    return (
        <>
            {
                !editing &&
                <>
                    <NavLink activeClassName={"active"} className={`${hungryClassName} `} to={to}>
                        {item.title}
                        <FontAwesomeIcon icon={"edit"} onClick={() => setEditing(true)} pull={"right"}/>
                    </NavLink>
                </>
            }
            {
                editing &&
                <>
                    <div className="col-12 btn-primary-active btn p-3">
                        <input
                            onChange={(e) =>
                                setCachedItem({
                                    ...cachedItem,
                                    title: e.target.value
                                })}
                            value={cachedItem.title}
                        />
                        <FontAwesomeIcon icon={"check"} pull={"right"} size={"lg"}
                                         onClick={() => {
                                             setEditing(false);
                                             updateItem(cachedItem)
                                         }}/>
                        <FontAwesomeIcon icon={"times"} pull={"right"} size={"lg"}
                                         onClick={() => deleteItem(item)}/>
                    </div>
                </>
            }
        </>
    )
}
export default EditableItem
