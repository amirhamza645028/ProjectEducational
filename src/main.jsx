// main.jsx - সম্পূর্ণ Router setup
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Mainlayout from './component/LayOut/Mainlayout';
import Home from './component/Home/Home';
import Contact from './component/Home/Contact';
import Courses from './component/course/Courses';
import Question from './component/Question/Question';
import About from './component/About/About';
import Dashboard from './component/About/Dashboard';
import DashboardDetail from './component/About/DashboardDetail';


const router = createBrowserRouter([
  {
    path: '/',
    element:<Mainlayout></Mainlayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/batches',
        element:<Courses></Courses>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },   
      {
        path: '/faq',
        element: <Question></Question>
      },
    
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>
      },
      {
      path:'/dashboard/:id',
      element:<DashboardDetail></DashboardDetail>
      },
      // {
      //   path: '/login',
      //   element: <Login />
      // },
      // Course routes - dynamic route
      // {
      //   path: '/course/:courseName',
      //   element: <CoursePage />
      // }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

