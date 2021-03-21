import React, {useState} from 'react'
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import WidgetType from "./widget-type";

const HeadingWidget = (
    {
        to,
        back,
        deleteItem,
        updateItem,
        widget
    }) => {

    const [editing, setEditing] = useState(false)
    const [widgetCache, setWidgetCache] = useState(widget);

    return (
        <>
            {
                !editing &&
                <div className={"row"}>
                    <div className={"col-11"}>
                        {widget.size === 1 && <h1>{widget.text}</h1>}
                        {widget.size === 2 && <h2>{widget.text}</h2>}
                        {widget.size === 3 && <h3>{widget.text}</h3>}
                        {widget.size === 4 && <h4>{widget.text}</h4>}
                        {widget.size === 5 && <h5>{widget.text}</h5>}
                        {widget.size === 6 && <h6>{widget.text}</h6>}
                    </div>
                    <div className={"col-1"}>
                        <Link to={to}>
                            <FontAwesomeIcon icon={"cog"} size={"lg"} pull={"right"}
                                             onClick={() => setEditing(true)}/>
                        </Link>
                    </div>
                </div>
            }
            {
                editing &&
                <div className={"row form-group"}>
                    <div className={"col-11"}>
                        <WidgetType widgetCache={widgetCache} setWidgetCache={setWidgetCache}/>
                        <input className="form-control" placeholder={"Widget text"}
                               value={widgetCache.text}
                               onChange={(e) => setWidgetCache({...widgetCache, text: e.target.value})}
                        />
                        <select className="form-control"
                                value={widgetCache.size}
                                onChange={(e) => setWidgetCache({...widgetCache, size: parseInt(e.target.value)})}
                        >
                            <option value={1}>Heading 1</option>
                            <option value={2}>Heading 2</option>
                            <option value={3}>Heading 3</option>
                            <option value={4}>Heading 4</option>
                            <option value={5}>Heading 5</option>
                            <option value={6}>Heading 6</option>
                        </select>
                    </div>
                    <div className={"col-1"}>
                        <Link to={back}>
                            <FontAwesomeIcon icon={"check"} size={"lg"} pull={"right"}
                                             onClick={() => {
                                                 setEditing(false)
                                                 updateItem(widgetCache)
                                             }}/>
                            <FontAwesomeIcon icon={"trash"} size={"lg"} pull={"right"} className={"mt-2 mr-1"}
                                             onClick={() => {
                                                 setEditing(false)
                                                 deleteItem(widget)
                                             }}/>
                        </Link>
                    </div>
                </div>
            }
        </>
    )
}

export default HeadingWidget
