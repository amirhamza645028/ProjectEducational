import { useNavigate } from "react-router-dom";

const cards = [
  { id: "course", title: "My Course" },
  { id: "subscription", title: "Subscriptions" },
  { id: "batch", title: "Available Batch" },
  { id: "pay", title: "Pay Now" },
  { id: "notice", title: "Notice" },
  { id: "complain", title: "Complain Box" },
  { id: "publication", title: "Publication" },
  { id: "account", title: "My Account" },
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen px-6 py-12 
      bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#2563eb]">

      <h1 className="text-4xl font-extrabold text-center mb-14 text-white">
        My Dashboard
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => navigate(`/dashboard/${card.id}`)}
            className="
              cursor-pointer
              bg-white
              rounded-3xl
              p-8
              text-center
              shadow-[0_15px_40px_rgba(0,0,0,0.2)]
              transition-all duration-300
              hover:-translate-y-2
              hover:shadow-[0_30px_80px_rgba(37,99,235,0.35)]
              active:scale-95
            "
          >
            <div className="mb-4 w-14 h-14 mx-auto flex items-center justify-center
              rounded-full bg-blue-100 text-blue-600 font-bold text-xl">
              {card.title.charAt(0)}
            </div>

            <h2 className="text-xl font-semibold text-gray-800">
              {card.title}
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              View details →
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Dashboard;
