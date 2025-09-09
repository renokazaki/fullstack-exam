import { Routes, Route, Navigate } from "react-router-dom";
import TopPage from "./pages/TopPage";
import PreviewPage from "./pages/PreviewPage";
import PublishQuestionPage from "./pages/PublishQuestionPage";
import PublishAnswerPage from "./pages/PublishAnswerPage";
import DraftPage from "./pages/DraftPage";
import ProfilePage from "./pages/ProfilePage";

// ログイン状態を確認するカスタムフック（将来実装）
// const useAuth = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//
//   // ここに認証ロジックを実装
//   // 例: useEffect(() => { checkAuthStatus().then(status => setIsAuthenticated(status)); }, []);
//
//   return { isAuthenticated };
// };

function App() {
  // 将来的にはここで認証状態を管理
  // const { isAuthenticated } = useAuth();
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/question/top" replace />} />
        <Route path="/question">
          <Route path="top" element={<TopPage />} />
          <Route path="publish" element={<PublishQuestionPage />} />
          <Route path="answer" element={<PublishAnswerPage />} />
          <Route path="preview" element={<PreviewPage />} />
          <Route path="draft" element={<DraftPage />} />
        </Route>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<Navigate to="/question/top" replace />} />
      </Routes>
    </>
  );
}

export default App;
