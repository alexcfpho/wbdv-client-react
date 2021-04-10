const QUIZZES_LOCAL_URL = process.env.REACT_APP_QUIZZES_URL
const QUESTIONS_LOCAL_URL = process.env.REACT_APP_QUESTIONS_URL

export const findQuestionsForQuiz = (qzid) =>
    fetch(`${QUIZZES_LOCAL_URL}/${qzid}/questions`)
        .then(response => response.json())

export const findAllQuestions = () =>
    fetch(`${QUESTIONS_LOCAL_URL}/questions`)
        .then(response => response.json())

export const findQuestionById = (qid) =>
    fetch(`${QUESTIONS_LOCAL_URL}/qid`)
        .then(response => response.json())

const api = {
    findQuestionsForQuiz,
    findAllQuestions,
    findQuestionById
}

export default api;