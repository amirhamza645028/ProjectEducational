// CourseDetails.jsx
import { useLoaderData } from 'react-router-dom';

function CourseDetails() {
  // Loader থেকে data পাওয়া - কোন fetch লাগছে না!
  const course = useLoaderData();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className={`bg-gradient-to-r ${course.color} rounded-2xl shadow-2xl p-8 text-white mb-8`}>
          <div className="flex justify-between items-start flex-wrap gap-4">
            <div>
              <span className="bg-white text-blue-600 px-4 py-1 rounded-full text-sm font-bold inline-block mb-3">
                {course.tag}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                {course.title}
              </h1>
              <p className="text-white/90 text-lg">{course.type} • {course.batch}</p>
            </div>
            <div className="text-right">
              <div className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold text-2xl">
                {course.fee}
              </div>
              <div className={`mt-2 px-4 py-1 rounded-full text-sm inline-block ${
                course.status === 'OPEN' ? 'bg-green-500' : 'bg-yellow-500'
              }`}>
                {course.status}
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - Main Info */}
          <div className="md:col-span-2 space-y-6">
            {/* Description */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                📖 Description
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {course.description}
              </p>
            </div>

            {/* Course Outline */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                📚 Course Outline
              </h2>
              <div className="space-y-3">
                {course.courseOutline.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                ⭐ Features & Benefits
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {course.features.map((feature, index) => (
                  <div key={index} className="flex items-center bg-blue-50 p-3 rounded-lg">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Schedule & Enrollment */}
          <div className="space-y-6">
            {/* Schedule Info */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">📅 Schedule</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">📆</span>
                  <div>
                    <p className="text-sm text-gray-500">Starting From</p>
                    <p className="font-semibold text-gray-800">{course.startDate}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">⏰</span>
                  <div>
                    <p className="text-sm text-gray-500">Time</p>
                    <p className="font-semibold text-gray-800">{course.duration}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">👥</span>
                  <div>
                    <p className="text-sm text-gray-500">Days</p>
                    <p className="font-semibold text-gray-800">{course.instructor}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enrollment Stats */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">👨‍🎓 Enrollment</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Enrolled</span>
                    <span className="font-semibold">{course.enrolledStudents}/{course.totalSeats}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all"
                      style={{ width: `${(course.enrolledStudents / course.totalSeats) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  {course.totalSeats - course.enrolledStudents} seats remaining
                </p>
              </div>
            </div>

            {/* Enroll Button */}
            <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all">
              Enroll Now
            </button>

            {/* Contact Info */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200">
              <h3 className="font-bold text-gray-800 mb-3">💬 Need Help?</h3>
              <p className="text-sm text-gray-600 mb-3">
                Contact our admission team for more information
              </p>
              <button className="w-full bg-white text-blue-600 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-all">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;