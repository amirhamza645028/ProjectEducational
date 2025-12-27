import { useParams, useNavigate } from "react-router-dom";

const DashboardDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center px-6
      bg-gradient-to-br from-[#e0e7ff] via-[#eef2ff] to-[#f8fafc]">

      <div className="
        bg-white
        rounded-3xl
        shadow-[0_20px_60px_rgba(0,0,0,0.2)]
        p-10 md:p-14
        max-w-2xl
        text-center
        transition-all duration-300
        hover:shadow-[0_30px_90px_rgba(37,99,235,0.3)]
      ">
        <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold
          rounded-full bg-blue-100 text-blue-700 capitalize">
          Dashboard Section
        </span>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 capitalize">
          {id} Details
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed mb-10">
          This is the detailed page for <b className="text-blue-600">{id}</b>.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          error sit maiores sapiente est illum corporis omnis eius libero.
        </p>

        <button
          onClick={() => navigate(-1)}
          className="
            px-8 py-4 rounded-2xl
            text-white font-semibold text-lg
            bg-gradient-to-r from-blue-600 to-indigo-600
            shadow-lg
            transition-all duration-300
            hover:from-indigo-600 hover:to-blue-700
            hover:scale-105
            active:scale-95
          "
        >
          ← Back to Dashboard
        </button>
      </div>
    </section>
  );
};

export default DashboardDetail;
