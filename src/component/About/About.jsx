import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-sky-100 to-blue-200 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-white/60 backdrop-blur-xl rounded-3xl shadow-xl p-10 grid md:grid-cols-2 gap-8">
        
        {/* LEFT IMAGE */}
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co/6g1Z0VZ/doctor.png"
            alt="Doctors"
            className="max-h-[350px]"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            Achieve your Goals with GENESIS
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            GENESIS is physician’s friend. We help you grow step by step with
            structured learning, exam preparation and confidence building.
          </p>

          <button
            onClick={() => navigate("/dashboard")}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            Join Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
