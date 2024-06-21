import PublicLayout from "./shared/layouts/PublicLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./shared/pages/LoginPage";
import RegisterPage from "./shared/pages/RegisterPage";
import ChatPage from "./shared/pages/ChatPage";
import PrivateLayout from "./shared/layouts/PrivateLayout";
function App() {
  return (
    <div className="container m-auto">
      <BrowserRouter>
        {/* Your content */}

        <Routes>
          <Route path="/" element={<PrivateLayout />}>
            <Route path="/chat" element={<ChatPage />} />
          </Route>
          <Route path="/" element={<PublicLayout />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            {/* <Route path="/forbidden" element={<ForbiddenPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
