import { Routes, Route } from "react-router-dom";
import TopPage from "./pages/TopPage";
import PreviewPage from "./pages/PreviewPage";
import PublishQuestionPage from "./pages/PublishQuestionPage";
import PublishAnswerPage from "./pages/PublishAnswerPage";
import DraftPage from "./pages/DraftPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/question">
          <Route path="top" element={<TopPage />} />
          <Route path="publish" element={<PublishQuestionPage />} />
          <Route path="answer" element={<PublishAnswerPage />} />
          <Route path="preview" element={<PreviewPage />} />
          <Route path="draft" element={<DraftPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
