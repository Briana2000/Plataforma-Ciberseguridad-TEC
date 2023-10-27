import { Navigate, Route, Routes } from "react-router-dom"
import { ChallengesPage } from "./pages/ChallengesPage"
import { AdminDashboardPage} from "./pages/AdminDashboardPage"
import { SubmitFlagPage } from "./pages/SubmitFlagPage"
import { LoginPage } from "./pages/LoginPage"
import { RegisterPage } from "./pages/RegisterPage"


const AppRouter = () => {
  return (
    <>
    <Routes>
        <Route path="/challenges" element={< ChallengesPage />} />
        <Route path="/login" element={< LoginPage />} />
        <Route path="/register" element={< RegisterPage />} />
        <Route path="/admin/dashboard" element={< AdminDashboardPage />} />
        <Route path="/submit_flag" element={< SubmitFlagPage />} />
    </Routes>
    
    </>
  )
}

export default AppRouter;

