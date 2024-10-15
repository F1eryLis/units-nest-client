import { Route, Routes } from "react-router-dom";

import AuthPage from "./pages/auth";
import GoogleOAuthRedirect from "./pages/auth/google-redirect/GoogleOAuthRedirect";
import ProtectedRoute from "./pages/auth/components/ProtectedRoute";
import MainLayout from "./layout/MainLayout";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={<ProtectedRoute children={<DashboardPage />} />}
          />

          <Route
            path="signin"
            element={<AuthPage />}
          />
          <Route
            path="auth/google-auth-redirect"
            element={<GoogleOAuthRedirect />}
          />
        </Route>
      </Routes>
    </>
  )
}

export default App
