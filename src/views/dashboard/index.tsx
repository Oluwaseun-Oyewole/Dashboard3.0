import RightMenu from "../../components/menu";
import TaskScheduler from "../../components/taskScheduler";
import NHTChart from "./chart";

const Dashboard = () => {
  return (
    <div className="lg:grid  grid-cols-[75%_auto] gap-4">
      <div className="flex flex-col gap-8">
        <TaskScheduler />
        <NHTChart />
      </div>

      <div className="bg-bgBlackMedium py-5 px-5">
        <RightMenu />
      </div>
    </div>
  );
};

export default Dashboard;
