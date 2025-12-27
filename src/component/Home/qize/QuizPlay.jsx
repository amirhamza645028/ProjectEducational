import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const quizData = {
  fcps: [
    {
      q: "FCPS এর পূর্ণরূপ কী?",
      options: ["Fellow of CPS", "Federal CPS", "Final CPS", "None"],
      answer: 0,
    },
    {
      q: "FCPS কোন প্রতিষ্ঠানের অধীনে?",
      options: ["BCPS", "BMDC", "MOH", "WHO"],
      answer: 0,
    },
  ],
  mph: [
    {
      q: "MPH এর পূর্ণরূপ কী?",
      options: [
        "Master of Public Health",
        "Medical Public Help",
        "Major Public Health",
        "None",
      ],
      answer: 0,
    },
  ],
  residency: [
    {
      q: "residency এর পূর্ণরূপ কী?",
      options: [
        "residency of Public Health",
        "residency Public Help",
        "residency Public Health",
        "None",
      ],
      answer: 0,
    },
  ],
};

function QuizPlay() {
  const { quizId } = useParams();
  const navigate = useNavigate();


const key = quizId?.toLowerCase();
const questions = quizData[key] || [];

  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [time, setTime] = useState(15);
  const [finished, setFinished] = useState(false);

  // TIMER
  useEffect(() => {
    if (finished) return;

    if (time === 0) {
      handleNext();
      return;
    }

    const timer = setTimeout(() => setTime(time - 1), 1000);
    return () => clearTimeout(timer);
  }, [time, finished]);

  const handleSelect = (i) => {
    if (selected !== null) return;
    setSelected(i);
    if (i === questions[index].answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setSelected(null);
    setTime(15);

    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      setFinished(true);
    }
  };

  if (!questions.length) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Quiz not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-slate-900 flex items-center justify-center px-6">
      <div className="bg-white rounded-3xl p-8 max-w-xl w-full shadow-2xl">

        {!finished ? (
          <>
            {/* HEADER */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-bold text-lg">
                Question {index + 1}/{questions.length}
              </h2>
              <span className="font-bold text-red-600">
                ⏱ {time}s
              </span>
            </div>

            {/* QUESTION */}
            <h1 className="text-xl font-semibold mb-6">
              {questions[index].q}
            </h1>

            {/* OPTIONS */}
            <div className="space-y-3">
              {questions[index].options.map((opt, i) => {
                let style =
                  "border border-slate-300 hover:bg-slate-100";

                if (selected !== null) {
                  if (i === questions[index].answer) {
                    style = "bg-green-500 text-white";
                  } else if (i === selected) {
                    style = "bg-red-500 text-white";
                  }
                }

                return (
                  <button
                    key={i}
                    onClick={() => handleSelect(i)}
                    className={`w-full px-4 py-3 rounded-xl text-left transition ${style}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            {/* NEXT */}
            {selected !== null && (
              <button
                onClick={handleNext}
                className="mt-6 w-full py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700"
              >
                Next Question →
              </button>
            )}
          </>
        ) : (
          /* RESULT */
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">
              🎉 Quiz Finished!
            </h1>
            <p className="text-lg mb-6">
              Your Score:{" "}
              <span className="font-bold text-indigo-600">
                {score} / {questions.length}
              </span>
            </p>

            <button
              onClick={() => navigate("/quiz")}
              className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700"
            >
              Back to Quiz List
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizPlay;
