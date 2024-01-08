import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
      <div className="grid grid-flow-col grid-cols-[15%_auto] lg:grid-cols-[17%_auto]">
        <div>
          <div className="bg-[#F9FAFB] px-5 pt-10">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
