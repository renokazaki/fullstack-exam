import { Routes, Route } from "react-router-dom";
import TopPage from "./pages/TopPage";
import PublishPage from "./pages/PublishPage";
import PreviewPage from "./pages/PreviewPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/top" element={<TopPage />} />
        <Route path="/publish" element={<PublishPage />} />
        <Route path="/preview" element={<PreviewPage />} />
      </Routes>
    </>
  );
}

export default App;
