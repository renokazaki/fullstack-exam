import { Routes, Route } from "react-router-dom";
import TopPage from "./pages/TopPage";
import PreviewPage from "./pages/PreviewPage";
import PublishQuestionPage from "./pages/PublishQuestionPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/top" element={<TopPage />} />
        <Route path="/publishQuestion" element={<PublishQuestionPage />} />
        <Route path="/preview" element={<PreviewPage />} />
      </Routes>
    </>
  );
}

export default App;
