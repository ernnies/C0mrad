import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const data = {
    labels: ["Token A", "Token B", "Token C"],
    datasets: [
      {
        label: "Portfolio Value",
        data: [1000, 1500, 800],
        backgroundColor: "rgba(59, 130, 246, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { position: "top" }, title: { display: true, text: "Portfolio Overview" } },
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Workflow Status</h3>
          <p>Active Workflows: 3</p>
          <p>Last Executed: 10:30 AM WAT</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;