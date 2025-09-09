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
        <Route path="/top" element={<TopPage />} />
        <Route path="/publishQuestion" element={<PublishQuestionPage />} />
        <Route path="/publishAnswer" element={<PublishAnswerPage />} />
        <Route path="/preview" element={<PreviewPage />} />
        <Route path="/draft" element={<DraftPage />} />
      </Routes>
    </>
  );
}

export default App;
