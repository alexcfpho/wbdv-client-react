import './App.css';
import CourseManager from "./components/course-manager";
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons'
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home"

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
            </div>
        </BrowserRouter>
    );
}

export default App;
