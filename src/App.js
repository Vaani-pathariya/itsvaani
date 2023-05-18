import {BrowserRouter, Route, Routes} from "react-router-dom"
import Landing from "./components/Landing";
import "./app.css"
import ProjectInfo1 from "./components/ProjectInfo1";
import About from "./components/About";
import Achievement from "./components/Achievements";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/">
          <Route exact path="" element={<Landing/>}></Route>
          <Route path="project1" element={<ProjectInfo1/>}></Route>
          <Route path="about" element={<About/>}></Route>
          <Route path="achievement" element={<Achievement/>}></Route>
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
