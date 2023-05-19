import {BrowserRouter, Route, Routes} from "react-router-dom"
import Landing from "./components/Landing";
import "./app.css"
import ProjectInfo1 from "./components/ProjectInfo1";
import About from "./components/About";
import Achievement from "./components/Achievements";
import ProjectInfo2 from "./components/ProjectInfo2";
import ProjectInfo3 from "./components/ProjectInfo3";
import ProjectInfo4 from "./components/ProjectInfo4";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/">
          <Route exact path="" element={<Landing/>}></Route>
          <Route path="project1" element={<ProjectInfo1/>}></Route>
          <Route path="project2" element={<ProjectInfo2/>}></Route>
          <Route path="project3" element={<ProjectInfo3/>}></Route>
          <Route path="project4" element={<ProjectInfo4/>}></Route>
          <Route path="about" element={<About/>}></Route>
          <Route path="achievement" element={<Achievement/>}></Route>
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
