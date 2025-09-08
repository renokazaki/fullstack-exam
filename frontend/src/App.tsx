import { Routes, Route, Link } from "react-router-dom";
import TopPage from "./pages/TopPage";
import PublishQuestionPage from "./pages/PublishQuestionPage";
function App() {
  return (
    <>
      <div className="bg-amber-500 text-2xl font-bold">hello react</div>
      <nav>
        <ul>
          <li>
            <Link to="/top">Page1</Link>
          </li>
          <li>
            <Link to="/publish">Page2</Link>
          </li>
          <li>
            <Link to="/page3">Page3</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/top" element={<TopPage />} />
        <Route path="/publish" element={<PublishQuestionPage />} />
      </Routes>
    </>
  );
}

export default App;
