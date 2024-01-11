import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import { useTheme } from "../../context";

const DashboardLayout = () => {
  const { isDarkMode } = useTheme();
  return (
    <>
      <div
        className={`flex ${
          isDarkMode ? "bg-bgBlack w-screen " : "bg-[#F5F5FC]"
        } grid grid-flow-col grid-cols-[10%_80%] md:grid-cols-[10%_85%] lg:grid-cols-[10%_auto] gap-5 font-Poppins`}
      >
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default DashboardLayout;
