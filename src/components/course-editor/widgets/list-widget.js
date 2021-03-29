import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import WidgetType from "./widget-type";

const ListWidget = (
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
                        {
                            widget.ordered &&
                            <ol>
                                {
                                    widget.text.split("\n").map((widget) => {
                                        return (
                                            <li>
                                                {widget}
                                            </li>
                                        )
                                    })
                                }
                            </ol>
                        }
                        {
                            !widget.ordered &&
                            <ul>
                                {
                                    widget.text.split("\n").map((widget) => {
                                        return (
                                            <li>
                                                {widget}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        }
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
                        <input checked={widgetCache.ordered} type="checkbox"
                               onChange={(e) => setWidgetCache({...widgetCache, ordered: e.target.checked})}/> Ordered
                        <br/>
                        Item list
                        <textarea value={widgetCache.text} rows={10} className="form-control"
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

export default ListWidget