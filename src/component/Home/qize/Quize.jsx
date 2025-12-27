import React from "react";
import { useNavigate } from "react-router-dom";
import { FaQuestionCircle, FaArrowRight } from "react-icons/fa";

const quizzes = [
  {
    id: "fcps",
    title: "FCPS Quiz",
    desc: "FCPS পরীক্ষার প্রস্তুতির জন্য মডেল প্রশ্ন",
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: "residency",
    title: "Residency Quiz",
    desc: "Residency admission test practice",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "mph",
    title: "MPH Quiz",
    desc: "Public Health based MCQ practice",
    color: "from-pink-500 to-rose-600",
  },
];

function Quize() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 py-16 px-6">
      
      {/* HEADER */}
      <div className="text-center text-white mb-14">
        <h1 className="text-5xl font-extrabold mb-4 tracking-wide">
          Smart Quiz Zone
        </h1>
        <p className="text-white/80 max-w-2xl mx-auto">
          নিজের প্রস্তুতি যাচাই করুন ইন্টার‍্যাকটিভ ও স্মার্ট কুইজের মাধ্যমে
        </p>
      </div>

      {/* QUIZ CARDS */}
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {quizzes.map((quiz) => (
          <div
            key={quiz.id}
            className={`
              relative group cursor-pointer
              rounded-3xl p-8 text-white
              bg-gradient-to-br ${quiz.color}
              shadow-[0_25px_70px_rgba(0,0,0,0.45)]
              transition-all duration-500
              hover:-translate-y-3
              hover:scale-[1.03]
            `}
          >
            {/* ICON */}
            <div className="text-5xl mb-6 opacity-90">
              <FaQuestionCircle />
            </div>

            <h2 className="text-2xl font-bold mb-2">
              {quiz.title}
            </h2>

            <p className="text-white/90 mb-8">
              {quiz.desc}
            </p>

            {/* BUTTON */}
            <button
              onClick={() => navigate(`/quiz/${quiz.id}`)}
              type="button"
              className="
                flex items-center gap-3
                bg-white text-slate-900
                px-6 py-3 rounded-full
                font-semibold
                transition-all
                group-hover:gap-5
              "
            >
              Start Quiz
              <FaArrowRight />
            </button>

            {/* GLOW EFFECT */}
            <div
              className="
                absolute inset-0 rounded-3xl
                bg-white/10 opacity-0
                group-hover:opacity-100
                transition
                pointer-events-none
              "
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Quize;

