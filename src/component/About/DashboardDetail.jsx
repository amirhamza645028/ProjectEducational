import { useParams, useNavigate } from "react-router-dom";

const DashboardDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-100 p-6">
      <div className="bg-white rounded-3xl shadow-xl p-10 max-w-xl text-center">
        <h1 className="text-3xl font-bold text-blue-800 mb-4 capitalize">
          {id} Details
        </h1>

        <p className="text-gray-600 mb-6">
          This is the detailed page for <b>{id}</b>.  
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, error sit maiores sapiente est illum corporis omnis eius libero. Tempore dolore veritatis earum quidem et, at sapiente accusamus beatae quibusdam.
        </p>

        <button
          onClick={() => navigate(-1)}
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          ⬅ Back
        </button>
      </div>
    </div>
  );
};

export default DashboardDetail;
