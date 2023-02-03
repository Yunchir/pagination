import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import Page from "./components/sub-components/Page";
import Pagenation from "./components/Pagenation";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/page/:id" element={<Page />} />
      </Routes>
      <Pagenation />
    </div>
  );
}

export default App;
