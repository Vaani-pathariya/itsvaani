import {BrowserRouter, Route, Routes} from "react-router-dom"
import Landing from "./components/Landing";
import "./app.css"
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
