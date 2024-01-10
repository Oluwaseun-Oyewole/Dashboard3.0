import Forward from "../../assets/svg/forward.svg";
import { CustomChart } from "../../components/chart";
import Typography from "../../components/typography";
import { useTheme } from "../../context";

const NHTChart = () => {
  const { isDarkMode } = useTheme();
  const months = [
    "Now",
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
      data: [150, 250, 240, 180, 150, 190, 230, 330, 350, 310, 280, 170, 120],
    },

    {
      name: "Traffic",
      data: [120, 320, 310, 270, 220, 200, 220, 280, 350, 320, 280, 180, 140],
    },
  ];

  return (
    <div className="bg-bgBlackMedium py-5 px-5">
      <div className="flex items-center justify-between">
        <Typography
          type="p"
          children="Dashboard"
          className={`${isDarkMode ? "text-white" : ""}`}
        />
        <img src={Forward} alt="forward" />
      </div>
      <CustomChart
        id="line-chart"
        type="line"
        colors={["#0277BD", "#C62828"]}
        series={lineSeries}
        categories={months}
        curve="smooth"
        yAxisLabel
      />
    </div>
  );
};

export default NHTChart;
