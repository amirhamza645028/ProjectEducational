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
    <div className="m-6 max-w-4xl mx-auto">
      <Heading
        heading="আপনার প্রশ্নগুলির উত্তর"
        subheading="সচরাচর যেসব প্রশ্ন আমাদের সেবা গ্রহিতাগণ করে থাকেন"
      />

      <div className="mt-6 space-y-4">
        {questions.map((item, index) => (
          <div
            key={index}
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-lg"
          >
            <div className="collapse-title font-semibold flex justify-between items-center">
              <span>{item.question}</span>
              <span className="flex items-center gap-2 text-primary">
                বিস্তারিত <FaArrowRight />
              </span>
            </div>

            <div className="collapse-content text-sm text-gray-600">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Question;
