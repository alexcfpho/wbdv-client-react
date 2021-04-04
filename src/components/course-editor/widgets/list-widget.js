import React, {useLayoutEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import WidgetType from "./widget-type";
import {nanoid} from 'nanoid'


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
    let keys = []

    // Generate stable ids once for each widget.
    useLayoutEffect(() => {
        let entry = new Promise(function (resolve, reject) {
            widget.text.split("\n").forEach((widget) => {
                resolve({text: widget, key: nanoid()});
            });
        });
        keys.push(entry)
        Promise.all(keys).then(values => {
            console.log(values)
        });
    });


    // function getKey(aWidget) {
    //
    // }


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
                                        let currKey;
                                        keys.forEach(function (entry) {
                                            if (entry.text === widget) {
                                                currKey = entry.key;
                                                console.log(entry.text)
                                                console.log(entry.key)
                                            }
                                        });
                                        return (
                                            <li key={currKey}>
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
                                  placeholder="Enter one list item per line"
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