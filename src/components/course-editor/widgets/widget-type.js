import React from "react";

const WidgetType = ({widgetCache, setWidgetCache}) =>
    <>
        <select className="form-control"
                value={widgetCache.type}
                placeholder={"Widget Type"}
                onChange={(e) => {
                    if (e.target.value === "HEADING" || e.target.value === "PARAGRAPH"
                        || e.target.value === "LIST") {
                        setWidgetCache({...widgetCache, type: e.target.value})
                    } else {
                        alert("Widget type is not yet supported!")
                    }
                }}>
            <option value={"HEADING"}>Heading</option>
            <option value={"PARAGRAPH"}>Paragraph</option>
            <option value={"VIDEO"}>Video</option>
            <option value={"IMAGE"}>Image</option>
            <option value={"LINK"}>Link</option>
            <option value={"LIST"}>List</option>
            <option value={"HTML"}>HTML</option>
        </select>
    </>

export default WidgetType