const QUIZZES_LOCAL_URL = process.env.REACT_APP_QUIZZES_URL

export const findAllQuizzes = () =>
    fetch(QUIZZES_LOCAL_URL)
        .then(response => response.json())

export const findQuizById = (qzid) =>
    fetch(`${QUIZZES_LOCAL_URL}/${qzid}`)
        .then(response => response.json())

const api = {
    findAllQuizzes,
    findQuizById
};

export default api;