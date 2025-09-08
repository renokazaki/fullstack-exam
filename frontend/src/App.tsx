import { Routes, Route } from "react-router-dom";
import TopPage from "./pages/TopPage";
import PublishPage from "./pages/PublishPage";
import Navigation from "./components/Navigation";
function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/top" element={<TopPage />} />
        <Route path="/publish" element={<PublishPage />} />
      </Routes>
    </>
  );
}

export default App;
