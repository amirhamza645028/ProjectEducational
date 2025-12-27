import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center px-6 
      bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#2563eb]">

      <div className="
        max-w-6xl w-full 
        bg-white rounded-3xl 
        shadow-[0_20px_60px_rgba(0,0,0,0.25)] 
        p-10 md:p-14
        grid md:grid-cols-2 gap-10
        transition-all duration-500
        hover:shadow-[0_30px_80px_rgba(37,99,235,0.35)]
      ">

        {/* LEFT IMAGE */}
        <div className="flex items-center justify-center">
          <img
            src="https://i.ibb.co/6g1Z0VZ/doctor.png"
            alt="Doctors"
            className="
              max-h-[380px]
              transition-all duration-500
              hover:scale-105
              drop-shadow-xl
            "
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col justify-center">
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold 
            rounded-full bg-blue-100 text-blue-700 w-fit">
            About GENESIS
          </span>

          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-6">
            Achieve your Goals <br />
            <span className="text-blue-600">with GENESIS</span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            GENESIS is a physician’s trusted companion. We guide you step by step
            through structured learning, exam preparation, and confidence building —
            so you can achieve success with clarity and discipline.
          </p>

          <div>
            <button
              onClick={() => navigate("/dashboard")}
              className="
                px-8 py-4 rounded-2xl text-white font-semibold text-lg
                bg-gradient-to-r from-blue-600 to-indigo-600
                shadow-lg
                transition-all duration-300
                hover:from-indigo-600 hover:to-blue-200
                hover:scale-105
                active:scale-95
              "
            >
              Join Us Now →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
