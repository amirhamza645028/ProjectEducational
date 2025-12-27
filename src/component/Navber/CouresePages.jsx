import React from 'react'
import { useParams } from "react-router-dom";
function CouresePages() {
  const { courseName } = useParams();

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 p-6">
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-4 uppercase">
          {courseName}
        </h1>

        <p className="text-gray-600">
          This is <b>{courseName}</b> course details page.  
          এখানে পরে API data বসাবে।
        </p>
      </div>
    </div>
  );
}

export default CouresePages