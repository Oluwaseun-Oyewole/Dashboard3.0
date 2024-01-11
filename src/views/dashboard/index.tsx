import TaskScheduler from "../../components/taskScheduler";
import NHTChart from "./chart";
import DataVisualization from "./visualizations";

const Dashboard = () => {
  return (
    <div className="lg:grid  grid-cols-[70%_auto] gap-4">
      <div className="flex flex-col gap-4 mb-5 overflow-y-scroll">
        <TaskScheduler />
        <NHTChart />
        <DataVisualization />
      </div>
      <div>Right Menu Screen ecr hjkl ghjkml,</div>
    </div>
  );
};

export default Dashboard;
