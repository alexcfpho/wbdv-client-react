const QUIZZES_LOCAL_URL = "http://localhost:4000/api/quizzes"

export const findAllQuizzes = () =>
    fetch(`${QUIZZES_LOCAL_URL}`)
        .then(response => response.json())

export const findQuizById = (qzid) =>
    fetch(`${QUIZZES_LOCAL_URL}/${qzid}`)
        .then(response => response.json())

const api = {
    findAllQuizzes,
    findQuizById
};

export default api;