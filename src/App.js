import { Routes,Route } from "react-router-dom";
import Landing from "./pages/Landing.js";
import P1 from "./project/pj1.js";
import './css/app.css'
import P2 from "./project/p2.js";
import P3 from "./project/p3.js";
import P4 from "./project/p4.js";
import P5 from "./project/p5.js";
import P6 from "./project/p6.js";
import P7 from "./project/p7.js";
import P9 from "./project/p9.js";
import P10 from "./project/p10.js";
import Pgrkam from "./project/pgrkam.js";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing/>}></Route>
        <Route exact path="/p1"element={<P1/>}></Route>
        <Route exact path="/p2"element={<P2/>}></Route>
        <Route exact path="/p3"element={<P3/>}></Route>
        <Route exact path="/p4"element={<P4/>}></Route>
        <Route exact path="/p5"element={<P5/>}></Route>
        <Route exact path="/p6"element={<P6/>}></Route>
        <Route exact path="/p7"element={<P7/>}></Route>
        <Route exact path="/p9"element={<P9/>}></Route>
        <Route exact path="/p10"element={<P10/>}></Route>
        <Route exact path="/pgrkam" element={<Pgrkam/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
