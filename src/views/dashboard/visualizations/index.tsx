import Forward from "../../../assets/svg/forward.svg";
import { CustomChart } from "../../../components/chart";
import Typography from "../../../components/typography";
import { useTheme } from "../../../context";

const DataVisualization = () => {
  const labels = [
    "22% Organic",
    "19% Paid",
    "18% Socials",
    "16% Referral",
    "15% Mail",
  ];

  const { isDarkMode } = useTheme();

  return (
    <div>
      <div className="grid grid-flow-col grid-cols-[50%_50%]">
        <div
          className={`fle items-center justify-center bg-bgBlackMedium  ${
            isDarkMode ? "text-white" : ""
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
        {/* <div>Second Div</div> */}
        {/* <div>Third Div</div> */}
      </div>
    </div>
  );
};

export default DataVisualization;
