// const QUIZZES_LOCAL_URL = "http://localhost:4000/api/quizzes"
// const QUESTIONS_LOCAL_URL = "http://localhost:4000/api/questions"

const QUIZZES_REMOTE_URL = process.env.REACT_QUIZZES_URL
const QUESTIONS_REMOTE_URL = process.env.REACT_QUESTIONS_URL

export const findQuestionsForQuiz = (qzid) =>
    fetch(`${QUIZZES_REMOTE_URL}/${qzid}/questions`)
        .then(response => response.json())

export const findAllQuestions = () =>
    fetch(`${QUESTIONS_REMOTE_URL}`)
        .then(response => response.json())

export const findQuestionById = (qid) =>
    fetch(`${QUESTIONS_REMOTE_URL}/${qid}`)
        .then(response => response.json())

const api = {
    findQuestionsForQuiz,
    findAllQuestions,
    findQuestionById
}

export default api;