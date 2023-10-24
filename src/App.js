import { Routes,Route } from "react-router-dom";
import Landing from "./pages/Landing.js";
import P1 from "./project/pj1.js";
import './css/app.css'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing/>}></Route>
        <Route exact path="/p1"element={<P1/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
