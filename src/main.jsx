import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import CourseAssignment from './page/CourseAssignment.jsx';
import CourseGrade from './page/CourseGrade.jsx';
import Dashboard from './page/Dashboard.jsx';
import CourseDetail from './page/CourseDetail.jsx';
import Layout from './layout/Layout.jsx';
import Calendar from './page/Calendar.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/Calendar' element={<Calendar/>}/>
        <Route path="/" element={<Layout />}>
          <Route path="Courses/:courseId" element={<CourseDetail />} />
          <Route path="Courses/:courseId/Assignment" element={<CourseAssignment />} />
          <Route path="Courses/:courseId/Grade" element={<CourseGrade />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
