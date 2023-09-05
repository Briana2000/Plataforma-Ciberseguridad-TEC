import { Navigate, Route, Routes } from "react-router-dom"
import { ChallengesPage } from "../pages/challenges/ChallengesPage"
import {AdminHomePage} from "../pages/admin/home/AdminHomePage"


export const AppRouter = () => {
  return (
    <>
    <Routes>
        <Route path="/challenges" element={< ChallengesPage />} />
        <Route path="/" element={<Navigate to = "/challenges" />} />
        <Route path="admin/home" element={< AdminHomePage />} />
    </Routes>
    
    </>
  )
}

