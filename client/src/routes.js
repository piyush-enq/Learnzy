import { useEffect } from 'react';
import { Navigate, useNavigate, Route, Routes, useRoutes } from 'react-router-dom';

// layouts
import { DashboardLayout, TutorDashLayout, StudentDashLayout } from './layouts/dashboard';

import UserPage from './pages/UserPage';
import Page404 from './pages/Page404';
import StudentsPage from './pages/StudentsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import DummyReview from './pages/DummyReview';

import StudentDashAppPage from './pages/StudentDashAppPage';
import StudentProfilePage from './pages/StudentProfilePage';
import StudentTutorListPage from './pages/StudentTutorListPage';
import StudentAssignPage from './pages/StudentAssignPage';
import StudentLibraryPage from './pages/StudentLibraryPage';

import TutorDashAppPage from './pages/TutorDashAppPage';
import TutorProfilePage from './pages/TutorProfilePage';
import TutorsPage from './pages/TutorsPage';
import TutorLogin from "./pages/TutorLogin";
import TutorAssignPage from './pages/TutorAssignPage';
import MyTutorsPage from './pages/MyTutorsPage';

import LandingPage from "./pages/LandingPage";
import StudentLogin from "./pages/StudentLogin";
import AdminLogin from "./pages/AdminLogin";
import TutorSignup from "./pages/TutorSignup";
import StudentSignup from "./pages/StudentSignup";
import AStudentsPage from './pages/AStudentPage';
import Whyus from './pages/Whyus';
import Aboutus from './pages/Aboutus';
// ----------------------------------------------------------------------

const AppRouter = () => {
  return (
    <Routes>
      <Route path="*" element={<LandingPage />} />
      <Route path="/open" element={<StudentSignup />}/>
      <Route path="/Aboutus" element ={<Aboutus />} />
      <Route path="/Whyus" element={<Whyus />} />
      <Route path="/TutorLogin" element={<TutorLogin />} />
      <Route path="/StudentLogin" element={<StudentLogin />} />
      <Route path="/AdminLogin" element={<AdminLogin />} />
      <Route path="/StudentSignup" element={<StudentSignup />} />
      <Route path="/TutorSignup" element={<TutorSignup />} />
      <Route path="/dashboard/*" element={<DashboardLayout />}>
        <Route path="app" element={<DashboardAppPage />} />
        <Route path="user" element={<DummyReview />} />
        <Route path="students" element={<AStudentsPage />} />
        <Route path="tutors" element={<TutorsPage />} />
      </Route>
      <Route path='/studentdash/*' element={<StudentDashLayout />}>
        <Route path="app" element={<StudentDashAppPage />} />
        <Route path="myprofile" element={<StudentProfilePage />} />
        <Route path="mytutors" element={<MyTutorsPage />} />
        <Route path="tutorlist" element={<StudentTutorListPage />} />
        <Route path="assignments" element={<StudentAssignPage/>} />
        <Route path="library" element={<StudentLibraryPage/>} />
      </Route>
      <Route path='/tutordash/*' element={<TutorDashLayout />}>
        <Route path="app" element={<TutorDashAppPage />} />
        <Route path="myprofile" element={<TutorProfilePage />} />
        <Route path="students" element={<StudentsPage />} />
        <Route path="assignments" element={<TutorAssignPage />} />
        <Route path="payments" element={<TutorsPage />} />
      </Route>

    </Routes>
  );
};



export { AppRouter };
