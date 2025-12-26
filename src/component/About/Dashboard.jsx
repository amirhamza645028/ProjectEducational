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
    <div className="min-h-screen bg-gradient-to-r from-slate-100 to-blue-100 p-10">
      <h1 className="text-3xl font-bold text-center mb-10 text-blue-800">
        My Dashboard
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => navigate(`/dashboard/${card.id}`)}
            className="cursor-pointer bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition border border-blue-200 text-center"
          >
            <h2 className="text-xl font-semibold text-blue-700">
              {card.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
