import { Routes, Route } from "react-router-dom";
import TopPage from "./pages/TopPage";
import PublishPage from "./pages/PublishPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/top" element={<TopPage />} />
        <Route path="/publish" element={<PublishPage />} />
      </Routes>
    </>
  );
}

export default App;
