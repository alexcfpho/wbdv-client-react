import React from "react";
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home"
import CourseManager from "./components/course-manager";
import QuizzesList from "./components/quizzes/quizzes-list";
import Quiz from "./components/quizzes/quiz";
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons'


library.add(fab, fas);

function App() {
    return (
        <BrowserRouter>
            <div className="container-fluid">
                <Route path="/" exact={true}>
                    <Home/>
                </Route>
                <Route path="/courses">
                    <CourseManager/>
                </Route>
                <Route path="/courses/:courseId/quizzes" exact={true}>
                    <QuizzesList/>
                </Route>
                <Route path="/courses/:courseId/quizzes/:quizId" exact={true}>
                    <Quiz/>
                </Route>
            </div>
        </BrowserRouter>
    );
}

export default App;
