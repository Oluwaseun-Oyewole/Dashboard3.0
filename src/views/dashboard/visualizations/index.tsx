import Forward from "../../../assets/svg/forward.svg";
import { CustomChart } from "../../../components/chart";
import Typography from "../../../components/typography";
import { useTheme } from "../../../context";
import { Liads } from "../../../helper/keyConstants";

const DataVisualization = () => {
  const labels = [
    "22% Organic",
    "19% Paid",
    "18% Socials",
    "16% Referral",
    "15% Mail",
  ];

  const columnSeries = [
    {
      name: "Completed",
      data: [700, 550, 600, 500, 450, 850, 500, 550, 600, 500, 450],
    },

    {
      name: "In Progress",
      data: [410, 400, 700, 700, 400, 700, 400, 700, 700, 400, 700],
    },
    {
      name: "Fired",
      data: [410, 400, 700, 700, 400, 700, 400, 700, 700, 400, 700],
    },
  ];

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
  ];

  return (
    <div className="flex gap-5 flex-col">
      <div className="flex flex-col lg:flex-row w-full justify-between gap-4">
        <div
          className={`w-full rounded-lg order-2 lg:order-1 ${
            isDarkMode ? "text-white bg-bgBlackMedium" : "bg-white"
          }`}
        >
          <div className="flex items-center justify-between p-5">
            <Typography
              type="p"
              children="Liads"
              className={`${isDarkMode ? "text-white" : ""}`}
            />
            <img src={Forward} alt="forward" />
          </div>
          <div className="px-5 flex flex-col gap-5 mb-5">
            {Liads?.map((items, index) => {
              return (
                <div key={index}>
                  <div className="flex items-center justify-between">
                    <Typography
                      type="p"
                      children={items.name}
                      className="!text-lg"
                      weight="medium"
                    />
                    <Typography
                      type="p"
                      children={items.amount}
                      className="!text-lg"
                      weight="medium"
                    />
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <Typography
                      type="p"
                      children={items.title}
                      className="!text-gray-500"
                    />
                    <Typography
                      type="p"
                      children={items.percentage}
                      className="!text-gray-500"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          className={`w-full rounded-lg ${
            isDarkMode ? "text-white bg-bgBlackMedium" : "bg-white"
          }`}
        >
          <div className="flex items-center justify-between p-5">
            <Typography
              type="p"
              children="Top Traffic Channel"
              className={`${isDarkMode ? "text-white" : ""}`}
            />
            <img src={Forward} alt="forward" />
          </div>
          <CustomChart
            id="line-chart"
            type="radialBar"
            colors={[
              "#C62828",
              "#283593",
              "#681B9A",
              "#00697C",
              "#ECA025",
              "#02277BD",
            ]}
            series={[22, 19, 18, 16, 15]}
            categories={[]}
            label={labels}
          />
        </div>
      </div>

      <div className="grid grid-flow-col grid-cols-[auto] gap-4">
        <div
          className={`fle items-center justify-center rounded-lg  ${
            isDarkMode ? "text-white bg-bgBlackMedium " : "bg-white"
          }`}
        >
          <div className="flex items-center justify-between p-5">
            <Typography
              type="p"
              children="Top Manager (Tasks)"
              className={`${isDarkMode ? "text-white" : ""}`}
            />
            <img src={Forward} alt="forward" />
          </div>
          <CustomChart
            id="column-chart"
            type="bar"
            colors={["#6A1B9A", "#0277BD", "#ECA025"]}
            series={columnSeries}
            stacked
            categories={months}
            label={[]}
            yAxisLabel
            showLines={false}
          />
        </div>
      </div>
    </div>
  );
};

export default DataVisualization;
