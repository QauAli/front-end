import "./Dashboard.css";
import Home from "./Home";
import BarChart from "./BarChart";
import Piechart from "./Piechart";

function Dashboard() {

  return (
    <div className="Dashboard-grid-container">
      <Home/>
      <BarChart />
    </div>
  );
}
export default Dashboard;
