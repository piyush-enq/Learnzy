import { useEffect } from 'react';
import { Navigate, useNavigate, Route, Routes, useRoutes } from 'react-router-dom';

// layouts
import { DashboardLayout, TutorDashLayout, StudentDashLayout } from './layouts/dashboard';

import UserPage from './pages/UserPage';
import Page404 from './pages/Page404';
import StudentsPage from './pages/StudentsPage';
import DashboardAppPage from './pages/DashboardAppPage';

import StudentDashAppPage from './pages/StudentDashAppPage';

import TutorDashAppPage from './pages/TutorDashAppPage';
import TutorProfilePage from './pages/TutorProfilePage';
import TutorsPage from './pages/TutorsPage';
import TutorLogin from "./pages/TutorLogin";

import LandingPage from "./pages/LandingPage";
import StudentLogin from "./pages/StudentLogin";
import AdminLogin from "./pages/AdminLogin";
import TutorSignup from "./pages/TutorSignup";
import StudentSignup from "./pages/StudentSignup";

// ----------------------------------------------------------------------

const AppRouter = () => {
  return (
    <Routes>
      <Route path="*" element={<LandingPage />} />
      <Route path="/TutorLogin" element={<TutorLogin />} />
      <Route path="/StudentLogin" element={<StudentLogin />} />
      <Route path="/AdminLogin" element={<AdminLogin />} />
      <Route path="/StudentSignup" element={<StudentSignup />} />
      <Route path="/TutorSignup" element={<TutorSignup />} />
      <Route path="/dashboard/*" element={<DashboardLayout />}> 
        <Route path="app" element={<DashboardAppPage />} />
        <Route path="user" element={<UserPage />} />
        <Route path="students" element={<StudentsPage/>} />
        <Route path="tutors" element={<TutorsPage />} />
      </Route>
      <Route path='/studentdash/*' element={<StudentDashLayout/>}>
        <Route path="app" element={<StudentDashAppPage />} />
        <Route path="myprofile" element={<UserPage />} />
        <Route path="mytutors" element={<StudentsPage/>} />
        <Route path="payments" element={<TutorsPage />} />
      </Route>
      <Route path='/tutordash/*' element={<TutorDashLayout/>}>
        <Route path="app" element={<TutorDashAppPage />} />
        <Route path="myprofile" element={<TutorProfilePage />} />
        <Route path="students" element={<StudentsPage/>} />
        <Route path="payments" element={<TutorsPage />} />
      </Route>
      
    </Routes>
  );
};



export { AppRouter };
