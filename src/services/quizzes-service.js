// const QUIZZES_LOCAL_URL = "http://localhost:4000/api/quizzes"
const QUIZZES_REMOTE_URL = process.env.REACT_APP_QUIZZES_URL

export const findAllQuizzes = () =>
    fetch(`${QUIZZES_REMOTE_URL}`)
        .then(response => response.json())

export const findQuizById = (qzid) =>
    fetch(`${QUIZZES_REMOTE_URL}/${qzid}`)
        .then(response => response.json())

export const submitQuiz = (qzid, questions) =>
    fetch(`${QUIZZES_REMOTE_URL}/${qzid}/attempts`, {
        method: 'POST',
        body: JSON.stringify(questions),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
        .then(result => console.log(result))

export const findAttemptsForQuiz = (qzid) =>
    fetch(`${QUIZZES_REMOTE_URL}/${qzid}/attempts`)
        .then(response => response.json())

const api = {
    findAllQuizzes,
    findQuizById,
    findAttemptsForQuiz,
    submitQuiz
};

export default api;