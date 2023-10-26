import { Navigate, Route, Routes } from "react-router-dom"
import { ChallengesPage } from "./pages/ChallengesPage"
import { AdminDashboardPage} from "./pages/AdminDashboardPage"
import { SubmitFlagPage } from "./pages/SubmitFlagPage"
import { UsersPage } from "./pages/UsersPage"


const AppRouter = () => {
  return (
    <>
    <Routes>
        <Route path="/challenges" element={< ChallengesPage />} />
        <Route path="/" element={<Navigate to = "/challenges" />} />
        <Route path="/admin/dashboard" element={< AdminDashboardPage />} />
        <Route path="/submit_flag" element={< SubmitFlagPage />} />
        <Route path="/users" element={< UsersPage />} />
    </Routes>
    
    </>
  )
}

export default AppRouter;

