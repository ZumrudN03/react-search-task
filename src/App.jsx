import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Detail from "./Pages/Details";
import HomePage from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage></HomePage>} />
            <Route
              path="/detail/name/:name"
              element={<Detail></Detail>}
            />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
