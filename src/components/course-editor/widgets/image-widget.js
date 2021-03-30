import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import WidgetType from "./widget-type";

const ImageWidget = (
    {
        to,
        back,
        deleteItem,
        updateItem,
        widget
    }) => {

    const [editing, setEditing] = useState(false)
    const [widgetCache, setWidgetCache] = useState(widget)

    return (
        <>
            {
                !editing &&
                <div className={"row"}>
                    <div className={"col-11"}>
                        <img src={widget.src} width={widget.width} height={widget.height}/>
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
                        <br/>
                        Image URL
                        <input value={widgetCache.src} className="form-control"
                               onChange={(e) => setWidgetCache({
                                   ...widgetCache,
                                   src: e.target.value
                               })}/>
                        <br/>
                        Image width
                        <input value={widgetCache.width} className="form-control" type="number"
                               onChange={(e) => setWidgetCache({
                                   ...widgetCache,
                                   width: parseInt(e.target.value)
                               })}/>
                        <br/>
                        Image height
                        <input value={widgetCache.height} className="form-control" type="number"
                               onChange={(e) => setWidgetCache({
                                   ...widgetCache,
                                   height: parseInt(e.target.value)
                               })}/>
                    </div>
                    <div className={"col-1"}>
                        <Link to={back}>
                            <FontAwesomeIcon icon={"check"} size={"lg"} pull={"right"}
                                             onClick={() => {
                                                 setEditing(false)
                                                 updateItem(widgetCache)
                                             }}/>
                            <FontAwesomeIcon icon={"trash"} size={"lg"} pull={"right"}
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

export default ImageWidget