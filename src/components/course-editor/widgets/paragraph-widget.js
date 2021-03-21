import React, {useState} from 'react'
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import WidgetType from "./widget-type";

const ParagraphWidget = (
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
                        <p>
                            {widget.text}
                        </p>
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
                <div className={"row"}>
                    <div className={"col-11"}>
                        <WidgetType widgetCache={widgetCache} setWidgetCache={setWidgetCache}/>
                        <textarea className="form-control"
                                  value={widgetCache.text}
                                  onChange={(e) => setWidgetCache({...widgetCache, text: e.target.value})}
                        />
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

export default ParagraphWidget
