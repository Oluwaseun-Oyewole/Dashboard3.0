import Forward from "../../assets/svg/forward.svg";
import Set from "../../assets/svg/set.svg";
import { CustomChart } from "../../components/chart";
import Typography from "../../components/typography";
import { useTheme } from "../../context";

const Report = () => {
  const { isDarkMode } = useTheme();

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const lineSeries = [
    {
      name: "Sales",
      data: [150, 250, 240, 180, 150, 190, 230, 330, 350, 310, 280, 170],
    },

    {
      name: "Traffic",
      data: [120, 320, 310, 270, 220, 200, 220, 280, 350, 320, 280, 180],
    },
  ];
  const annotations = {
    xaxis: [{}],
  };

  return (
    <div className="mt-5 mr-5">
      <div
        className={`rounded-lg ${isDarkMode ? "bg-bgBlackMedium" : "bg-white"}`}
      >
        <div className={`flex items-center justify-between px-5 py-6 `}>
          <Typography
            type="p"
            children="Dashboard"
            className={`${isDarkMode ? "text-white" : ""}`}
          />
          <img src={Forward} alt="forward" />
        </div>
        <CustomChart
          id="line-chart"
          type="bar"
          colors={["#0277BD", "#6A1B94"]}
          series={lineSeries}
          categories={months}
          yAxisLabel
          annotations={annotations}
          showLines={isDarkMode && true}
          label={[]}
        />
      </div>

      <div className="flex justify-between w-[70%] py-5">
        <div
          className={`${
            isDarkMode ? "text-white" : "text-bgBlackMedium"
          } flex items-center gap-5 border-[1px] border-orange rounded-full px-3 py-2`}
        >
          <Typography type="p" children="Main" />{" "}
          <img src={Set} alt="settings" />
        </div>

        <div
          className={`${
            isDarkMode ? "text-white" : "text-bgBlackMedium"
          } flex items-center gap-5 border-[1px] border-gray-500 rounded-full px-3 py-2`}
        >
          <Typography type="p" children="Devices" className=" !text-xs" />{" "}
          <img src={Set} alt="settings" />
        </div>

        <div
          className={`${
            isDarkMode ? "text-white" : "text-bgBlackMedium"
          } flex items-center gap-5 border-[1px] border-gray-500 rounded-full px-3 py-2`}
        >
          <Typography type="p" children="Pay Channels" className=" !text-xs" />{" "}
          <img src={Set} alt="settings" />
        </div>

        <div
          className={`${
            isDarkMode ? "text-white" : "text-bgBlackMedium"
          } flex items-center gap-5 border-[1px] border-gray-500 rounded-full px-3 py-2`}
        >
          <Typography type="p" children="Days" className=" !text-xs" />{" "}
          <img src={Set} alt="settings" />
        </div>

        <div
          className={`${
            isDarkMode ? "text-white" : "text-bgBlackMedium"
          } flex items-center gap-5 border-[1px] border-gray-500 rounded-full px-3 py-2`}
        >
          <Typography type="p" children="Managers" className=" !text-xs" />{" "}
          <img src={Set} alt="settings" />
        </div>

        <div
          className={`${
            isDarkMode ? "text-white" : "text-bgBlackMedium"
          } flex items-center gap-5 border-[1px] border-gray-500 rounded-full px-3 py-2`}
        >
          <Typography type="p" children="MQL/CR" className=" !text-xs" />{" "}
          <img src={Set} alt="settings" />
        </div>
        <div
          className={`${
            isDarkMode ? "text-white" : "text-bgBlackMedium"
          } flex items-center gap-5 border-[1px] border-gray-500 rounded-full px-3 py-2`}
        >
          <Typography type="p" children="Sales" className=" !text-xs" />{" "}
          <img src={Set} alt="settings" />
        </div>
      </div>
    </div>
  );
};

export default Report;
