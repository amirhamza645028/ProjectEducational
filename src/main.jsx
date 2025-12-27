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
import CourseAllBatchFinder from './component/course/CourseDetails/CourseAllBatchFinder';
import CourseDetails from './component/course/CourseFCPSP-ISurgery/CourseDetails';


import coursesData from '../public/data/coursesData.json'
import CouresePages from './component/Navber/CouresePages';
import Fcps from './component/Navber/courseFCSmph/Fcps';
import Residency from './component/Navber/courseFCSmph/Residency';
import Diploma from './component/Navber/courseFCSmph/Diploma';
import MPH from './component/Navber/courseFCSmph/MPH';
import Combined from './component/Navber/courseFCSmph/Combined';
import Register from './Pages/Register';
import Login from './Pages/Login';
import AuthProvider from './Context/AuthProvider';
import Outlier from './component/Navber/courseFCSmph/Outlier';
import Galary from './component/Home/Galary/Galary';
import Quize from './component/Home/qize/Quize';
import QuizPlay from './component/Home/qize/QuizPlay';
const courseLoader = ({ params }) => {
  const course = coursesData.find(c => c.id === parseInt(params.id));
  if (!course) {
    throw new Response("Course Not Found", { status: 404 });
  }
  return course;
};


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
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },


      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>
      },
      {
      path:'/dashboard/:id',
      element:<DashboardDetail></DashboardDetail>
      },
      {
        path: '/CourseAllBatchFinder',
        element: <CourseAllBatchFinder></CourseAllBatchFinder>
      },
      {
        path: "/course/:id",
        element: <CourseDetails></CourseDetails>,
        loader: courseLoader
      },
      // Course routes - dynamic route
      {
        path: '/course/:courseName',
        element: <CouresePages></CouresePages>
      },
      {
        path:'/course/Fcps',
        element:<Fcps></Fcps>
      },
      {
        path:'/course/residency',
        element:<Residency></Residency>
      },
      {
        path:'/course/mphil-diploma',
        element:<Diploma></Diploma>
      },
      {
        path:'/course/mph',
        element:<MPH></MPH>
      },
      {
        path:'/course/combined',
        element:<Combined></Combined>
      },
      {
        path:'/course/outlier',
        element:<Outlier></Outlier>

      },
      {
        path:'/galary',
        element:<Galary></Galary>
      },
      {
        path:'/quiz',
        element:<Quize></Quize>
      },
      {
        path: "/quiz/:quizId",
        element: <QuizPlay></QuizPlay>
      }


    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
    <div className='max-w-7xl mx-auto'>
      <RouterProvider router={router} />
    </div>
    
  </AuthProvider>
    
  </React.StrictMode>
);

