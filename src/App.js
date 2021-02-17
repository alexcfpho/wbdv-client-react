import './App.css';
import CourseManager from "./components/course-manager";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas);

function App() {
  return (
    <div className="container-fluid">
      <CourseManager/>
    </div>
  );
}

export default App;
