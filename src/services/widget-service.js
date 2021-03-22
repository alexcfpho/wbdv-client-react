const TOPICS_LOCAL_URL = process.env.REACT_APP_TOPIC_URL;
const WIDGETS_LOCAL_URL = process.env.REACT_APP_WIDGET_URL;

export const createWidget = (topicId, widget) =>
    fetch(`${TOPICS_LOCAL_URL}/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findWidgetsForTopic = (topicId) =>
    fetch(`${TOPICS_LOCAL_URL}/${topicId}/widgets`)
        .then(response => response.json())

export const findWidgetById = (widgetId) =>
    fetch(`${WIDGETS_LOCAL_URL}/${widgetId}`)
        .then(response => response.json())

export const findAllWidgets = () =>
    fetch(`${WIDGETS_LOCAL_URL}`)
        .then(response => response.json())

export const updateWidget = (wid, widget) =>
    fetch(`${WIDGETS_LOCAL_URL}/${wid}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deleteWidget = (wid) =>
    fetch(`${WIDGETS_LOCAL_URL}/${wid}`, {
        method: "DELETE",
    })
        .then(response => response.json())

const api = {
    createWidget,
    findWidgetsForTopic,
    findWidgetById,
    findAllWidgets,
    updateWidget,
    deleteWidget
};

export default api;
