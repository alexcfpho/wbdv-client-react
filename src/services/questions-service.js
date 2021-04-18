const QUIZZES_LOCAL_URL = "http://localhost:4000/api/quizzes"
const QUESTIONS_LOCAL_URL = "http://localhost:4000/api/questions"

export const findQuestionsForQuiz = (qzid) =>
    fetch(`${QUIZZES_LOCAL_URL}/${qzid}/questions`)
        .then(response => response.json())

export const findAllQuestions = () =>
    fetch(`${QUESTIONS_LOCAL_URL}`)
        .then(response => response.json())

export const findQuestionById = (qid) =>
    fetch(`${QUESTIONS_LOCAL_URL}/${qid}`)
        .then(response => response.json())

const api = {
    findQuestionsForQuiz,
    findAllQuestions,
    findQuestionById
}

export default api;