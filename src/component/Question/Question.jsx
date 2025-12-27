import React from "react";
import Heading from "../Heading";
import { FaArrowRight } from "react-icons/fa";

const questions = [
  {
    question: "ডিভাইস ভেরিফিকেশন কিভাবে করব বিস্তারিত জানতে চাই",
    answer:
      "ডিভাইস ভেরিফিকেশনের জন্য লগইন করে প্রোফাইল সেটিংসে যান এবং নির্দেশনা অনুসরণ করুন।",
  },
  {
    question:
      "আপনার ফোনে কি ভিডিও লেকচার দেখতে এবং সাউন্ড প্রবলেম হচ্ছে?",
    answer:
      "ইন্টারনেট চেক করুন, ভলিউম বাড়ান এবং অন্য ব্রাউজার/ডিভাইস দিয়ে চেষ্টা করুন।",
  },
  {
    question: "অনলাইন ক্লাস বা পরীক্ষাতে সমস্যা ফেস করছেন?",
    answer:
      "লাইভ ক্লাস শুরুর আগে ব্রাউজার রিফ্রেশ করুন এবং স্টেবল ইন্টারনেট ব্যবহার করুন।",
  },
  {
    question: 'Details of "System Driven" study method',
    answer:
      "System Driven method এ নির্দিষ্ট রুটিন অনুযায়ী পড়াশোনা করানো হয়।",
  },
];

function Question() {
  return (
    <section className="px-6 py-14 bg-[#f5f7fb]">
      <div className="max-w-4xl mx-auto">
        <Heading
          heading="আপনার প্রশ্নগুলির উত্তর"
          subheading="সচরাচর যেসব প্রশ্ন আমাদের সেবা গ্রহিতাগণ করে থাকেন"
        />

        <div className="mt-8 space-y-5">
          {questions.map((item, index) => (
            <div
              key={index}
              tabIndex={0}
              className="
                collapse collapse-arrow
                bg-white rounded-2xl
                border border-slate-200

                shadow-[0_14px_40px_rgba(0,0,0,0.12)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_28px_80px_rgba(0,0,0,0.22)]
              "
            >
              {/* TITLE */}
              <div className="collapse-title font-semibold flex justify-between items-center text-slate-900">
                <span className="pr-4">{item.question}</span>

                <span className="flex items-center gap-2 text-blue-600 text-sm font-semibold">
                  বিস্তারিত <FaArrowRight />
                </span>
              </div>

              {/* CONTENT */}
              <div className="collapse-content text-slate-600 text-sm leading-relaxed">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Question;
