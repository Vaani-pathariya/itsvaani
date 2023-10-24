import { Routes,Route } from "react-router-dom";
import Landing from "./pages/Landing.js";
import './css/app.css'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
