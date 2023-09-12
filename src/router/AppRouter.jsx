import { Navigate, Route, Routes } from "react-router-dom"
import { ChallengesPage } from "../pages/challenges/ChallengesPage"
import {AdminDashboardPage} from "../pages/admin/dashboard/AdminDashboardPage"


export const AppRouter = () => {
  return (
    <>
    <Routes>
        <Route path="/challenges" element={< ChallengesPage />} />
        <Route path="/" element={<Navigate to = "/challenges" />} />
        <Route path="admin/dashboard" element={< AdminDashboardPage />} />
    </Routes>
    
    </>
  )
}

