// Navber2.jsx - React Router সহ সম্পূর্ণ কাজ করবে
import Marquee from "react-fast-marquee";
import { NavLink, useNavigate } from 'react-router-dom';

function Navber2() {
  const navigate = useNavigate();
  
  // NavLink এর জন্য active class
  const navLinkStyle = ({ isActive }) => {
    return isActive 
      ? "font-bold text-blue-600 bg-blue-50 px-3 py-2 rounded-lg shadow-sm transition-all"
      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition-all";
  };

  // Course click handler - navigate to course page
  const handleCourseClick = (courseName) => {
    navigate(`/course/${courseName}`);
  };

  const navItem = (
    <>
      <li>
        <details>
          <summary className="font-medium text-gray-700 hover:text-blue-600 cursor-pointer px-3 py-2">
            Courses ▼
          </summary>
          <ul className="p-2 bg-white w-48 shadow-lg rounded-lg z-50 border border-gray-200">
            <li>
              <button 
                onClick={() => handleCourseClick('fcps')}
                className="w-full text-left block hover:bg-blue-50 p-2 rounded transition-all text-gray-700 hover:text-blue-600"
              >
                FCPS
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleCourseClick('residency')}
                className="w-full text-left block hover:bg-blue-50 p-2 rounded transition-all text-gray-700 hover:text-blue-600"
              >
                Residency
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleCourseClick('mphil-diploma')}
                className="w-full text-left block hover:bg-blue-50 p-2 rounded transition-all text-gray-700 hover:text-blue-600"
              >
                M.Phil/Diploma
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleCourseClick('mph')}
                className="w-full text-left block hover:bg-blue-50 p-2 rounded transition-all text-gray-700 hover:text-blue-600"
              >
                MPH
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleCourseClick('combined')}
                className="w-full text-left block hover:bg-blue-50 p-2 rounded transition-all text-gray-700 hover:text-blue-600"
              >
                Combined
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleCourseClick('outlier')}
                className="w-full text-left block hover:bg-blue-50 p-2 rounded transition-all text-gray-700 hover:text-blue-600"
              >
                Outlier
              </button>
            </li>
          </ul>
        </details>
      </li>
      
      <li>
        <NavLink to="/batches" className={navLinkStyle}>
          Batches
        </NavLink>
      </li>
      <li>
        <NavLink to="/faq" className={navLinkStyle}>
          FAQ
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={navLinkStyle}>
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={navLinkStyle}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/quiz" className={navLinkStyle}>
          Quiz
        </NavLink>
      </li>
    </>
  );
  
  return (
    <div className="sticky top-0 z-50">
      <div className="navbar bg-gradient-to-r from-white to-gray-50 shadow-lg border-b border-gray-200">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white rounded-box z-50 mt-3 w-52 p-2 shadow-xl">
              {navItem}
            </ul>
          </div>
          <NavLink 
            to="/"
            className="btn btn-ghost text-xl font-bold text-blue-700 hover:text-blue-800"
          >
            MediLearn
          </NavLink>
        </div>
        
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex items-center gap-1">
            {navItem}
          </ul>
        </div>
        
        <div className="navbar-end">
          <NavLink 
            to="/login"
            className="btn bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-md hover:shadow-lg transition-all"
          >
            Login / Register
          </NavLink>
        </div>
      </div>

      <div className='bg-gradient-to-r from-red-50 to-pink-50 py-2 border-y border-gray-200'>
        <Marquee speed={50} gradient={false} className="font-bold">
          <span className="text-red-600 mx-4">📢 I can be a React component, multiple React components, or just some text.</span>
          <span className="text-blue-600 mx-4">🎯 Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          <span className="text-green-600 mx-4">🌟 Accusamus, nesciunt! Doloribus nemo asperiores ut est fugiat, exercitationem adipisci doloremque?</span>
        </Marquee>
      </div>
    </div>
  );
}

export default Navber2;