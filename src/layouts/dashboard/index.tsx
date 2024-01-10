import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import { useTheme } from "../../context";

const DashboardLayout = () => {
  const { isDarkMode } = useTheme();
  return (
    <>
      <div
        className={`flex ${
          isDarkMode ? " bg-bgBlack" : "bg-white"
        } grid grid-flow-col grid-cols-[10%_90%] gap-3`}
      >
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default DashboardLayout;
