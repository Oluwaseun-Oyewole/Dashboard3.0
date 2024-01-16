import Dollars from "../../assets/svg/Dollar.svg";
import Change from "../../assets/svg/change_history_24px.svg";
import Dropdown from "../../assets/svg/dropdown.svg";
import Extension from "../../assets/svg/extension_24px.svg";
import Filter from "../../assets/svg/filter.svg";
import Forward from "../../assets/svg/forward.svg";
import Help from "../../assets/svg/help.svg";
import Location from "../../assets/svg/location.svg";
import Mail from "../../assets/svg/mail.svg";
import Others from "../../assets/svg/others.svg";
import Referral from "../../assets/svg/referral.svg";
import Save from "../../assets/svg/save_alt_24px.svg";
import Search from "../../assets/svg/search_24px.svg";
import { default as Set, default as Settings } from "../../assets/svg/set.svg";
import User from "../../assets/svg/users.svg";
import { CustomChart } from "../../components/chart";
import CustomTable from "../../components/customtable";
import DateFilter from "../../components/filter";
import Typography from "../../components/typography";
import { useTheme } from "../../context";

const Report = () => {
  const { isDarkMode } = useTheme();

  const columns = [
    {
      title: "",
      dataIndex: "checkbox",
      key: "",
    },
    {
      title: "Channels",
      dataIndex: "channels",
      key: "channels",
      icon: Settings,
      render: (text: string) => (
        <Typography type="p" className="!text-sm">
          {text}
        </Typography>
      ),
    },
    {
      title: "Sales",
      dataIndex: "sales",
      key: "sales",
      icon: Help,
    },
    {
      title: "Traffic",
      dataIndex: "traffic",
      key: "traffic",
      icon: Help,
    },
    {
      title: "Views",
      dataIndex: "views",
      key: "views",
      icon: Settings,
    },
    {
      title: "CTR",
      dataIndex: "ctr",
      key: "ctr",
      icon: Settings,
    },
    {
      title: "Liads",
      dataIndex: "liads",
      key: "liads",
      icon: Help,
    },
    {
      title: "CR",
      dataIndex: "cr",
      key: "cr",
      icon: Help,
    },
    {
      title: "Expenses",
      dataIndex: "expenses",
      key: "expenses",
      icon: Help,
    },
    {
      title: "CPC",
      dataIndex: "cpc",
      key: "cpc",
      icon: Help,
    },
    {
      title: "CPL",
      dataIndex: "cpl",
      key: "cpl",
      icon: Settings,
    },
    {
      title: "Profits",
      dataIndex: "profits",
      key: "profits",
      icon: Settings,
    },
    {
      title: "ROI",
      dataIndex: "roi",
      key: "roi",
      icon: Settings,
    },
  ];

  const data = [
    {
      key: "0",
      channels: "Total",
      sales: 783,
      traffic: "123 456",
      views: "872 529",
      ctr: "34%",
      liads: "1456",
      cr: "50%",
      expenses: "734 567",
      cpc: "345$",
      cpl: "145$",
      profits: "879, 997$",
      postSrc: Filter,
      roi: "67%",
    },
    {
      key: "1",
      channels: `Pay channels`,
      sales: 42,
      traffic: "205",
      preSrc: User,
      postSrc: Dropdown,
      views: "72 628",
      ctr: "4%",
      liads: "146",
      cr: "8%",
      expenses: "74 597",
      cpc: "15$",
      cpl: "--",
      profits: "179, 221$",
      roi: "7%",
    },
    {
      key: "2",
      channels: `PR channels`,
      sales: 42,
      traffic: "205",
      preSrc: Dollars,
      postSrc: Dropdown,
      views: "22 345",
      ctr: "8%",
      liads: "256",
      cr: "4%",
      expenses: "134 267",
      cpc: "13$",
      cpl: "--",
      profits: "112, 237$",
      roi: "6%",
    },
    {
      key: "3",
      channels: "Organic channels",
      sales: 832,
      traffic: "403",
      preSrc: Search,
      postSrc: Dropdown,
      views: "---",
      ctr: "10%",
      liads: "126",
      cr: "9%",
      expenses: "234 267",
      cpc: "--",
      cpl: "15$",
      profits: "12, 437$",
      roi: "12%",
    },
    {
      key: "4",
      channels: "Google",
      sales: 532,
      address: "110",
      traffic: "1105",
      postSrc: Dropdown,
      views: "---",
      ctr: "--",
      liads: "156",
      cr: "10%",
      expenses: "34 567",
      cpc: "24$",
      cpl: "10$",
      profits: "20, 437$",
      roi: "12%",
    },
    {
      key: "5",
      channels: "Bing",
      sales: 392,
      address: "220",
      traffic: "2025",
      postSrc: Dropdown,
      views: "---",
      ctr: "7%",
      liads: "226",
      cr: "--",
      expenses: "54 657",
      cpc: "32$",
      cpl: "12$",
      profits: "12, 137$",
      roi: "--",
    },

    {
      key: "6",
      channels: "Bing",
      sales: 232,
      address: "210",
      traffic: "3055",
      postSrc: Dropdown,
      views: "---",
      ctr: "5%",
      liads: "116",
      cr: "--",
      expenses: "134 267",
      cpc: "6$",
      cpl: "8$",
      profits: "82, 237$",
      roi: "--",
    },

    {
      key: "6",
      channels: "Yahoo",
      sales: 632,
      address: "Sydney No. 1 Lake Park, Sydney No. 1 Lake Park",
      traffic: "405",
      postSrc: Dropdown,
      views: "---",
      ctr: "13%",
      liads: "234",
      cr: "5%",
      expenses: "23 897",
      cpc: "--",
      cpl: "11$",
      profits: "21, 467$",
      roi: "27%",
    },

    {
      key: "7",
      channels: "Direct channels",
      sales: 302,
      preSrc: Location,
      address: "Sydney No. 1 Lake Park, Sydney No. 1 Lake Park",
      traffic: "705",
      postSrc: Dropdown,
      views: "---",
      ctr: "9%",
      liads: "222",
      cr: "15%",
      expenses: "32 567",
      cpc: "32$",
      cpl: "15$",
      profits: "22, 437$",
      roi: "25%",
    },
    {
      key: "8",
      channels: "Referral channels",
      sales: 32,
      preSrc: Referral,
      address: "Sydney No. 1 Lake Park, Sydney No. 1 Lake Park",
      traffic: "2005",
      postSrc: Dropdown,
      views: "---",
      ctr: "--",
      liads: "256",
      cr: "10%",
      expenses: "84 237",
      cpc: "--",
      cpl: "12$",
      profits: "112, 237$",
      roi: "17%",
    },
    {
      key: "9",
      channels: "Mall channels",
      sales: 132,
      preSrc: Mail,
      address: "Sydney No. 1 Lake Park, Sydney No. 1 Lake Park",
      traffic: "1005",
      postSrc: Dropdown,
      views: "---",
      ctr: "--",
      liads: "65",
      cr: "7%",
      expenses: "34 345",
      cpc: "9$",
      cpl: "--",
      profits: "32, 637$",
      roi: "13%",
    },
    {
      key: "10",
      channels: "Others",
      sales: 232,
      preSrc: Others,
      address: "Sydney No. 1 Lake Park, Sydney No. 1 Lake Park",
      traffic: "905",
      postSrc: Dropdown,
      views: "32 456",
      ctr: "8%",
      liads: "--",
      cr: "3%",
      expenses: "224 347",
      cpc: "--",
      cpl: "14$",
      profits: "23, 537$",
      roi: "--",
    },
    {
      key: "11",
      channels: "Direct channels",
      sales: 432,
      preSrc: Location,
      address: "Sydney No. 1 Lake Park, Sydney No. 1 Lake Park",
      traffic: "305",
      postSrc: Dropdown,
      views: "12 456",
      ctr: "8%",
      liads: "--",
      cr: "5%",
      expenses: "234 437",
      cpc: "--",
      cpl: "13$",
      profits: "11, 237$",
      roi: "10%",
    },
  ];

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
    <div className={`pt-5 pr-5  ${isDarkMode ? "bg-bgBlack" : "bg-[#F5F5FC]"}`}>
      <div
        className={`grid gap-8 lg:gap-0 lg:grid-flow-col justify-between items-center py-5`}
      >
        <DateFilter onFilter={() => {}} />
        <div className="flex gap-2">
          <img src={Change} alt="change" /> <img src={Extension} alt="extend" />
          <img src={Search} alt="search" /> <img src={Save} alt="save" />{" "}
          <img src={Settings} alt="setting" />
        </div>
      </div>
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

      <div className="grid grid-cols-2 md:grid-cols-3  items-center gap-5 lg:flex justify-between lg:w-[70%] py-8">
        <div
          className={`${
            isDarkMode ? "text-white" : "text-bgBlackMedium"
          } flex items-center gap-5 border-[1px] border-orange rounded-full px-3 py-2 cursor-pointer`}
        >
          <Typography type="p" children="Main" className=" !text-xs" />{" "}
          <img src={Set} alt="settings" />
        </div>

        <div
          className={`${
            isDarkMode ? "text-white" : "text-bgBlackMedium"
          } flex items-center gap-5 border-[1px] border-gray-500 rounded-full px-3 py-2 cursor-pointer`}
        >
          <Typography type="p" children="Devices" className=" !text-xs" />{" "}
          <img src={Set} alt="settings" />
        </div>

        <div
          className={`${
            isDarkMode ? "text-white" : "text-bgBlackMedium"
          } flex items-center gap-5 border-[1px] border-gray-500 rounded-full px-3 py-2 cursor-pointer`}
        >
          <Typography type="p" children="Pay Channels" className=" !text-xs" />{" "}
          <img src={Set} alt="settings" />
        </div>

        <div
          className={`${
            isDarkMode ? "text-white" : "text-bgBlackMedium"
          } flex items-center gap-5 border-[1px] border-gray-500 rounded-full px-3 py-2 cursor-pointer`}
        >
          <Typography type="p" children="Days" className=" !text-xs" />{" "}
          <img src={Set} alt="settings" />
        </div>

        <div
          className={`${
            isDarkMode ? "text-white" : "text-bgBlackMedium"
          } flex items-center gap-5 border-[1px] border-gray-500 rounded-full px-3 py-2 cursor-pointer`}
        >
          <Typography type="p" children="Mansalesrs" className=" !text-xs" />{" "}
          <img src={Set} alt="settings" />
        </div>

        <div
          className={`${
            isDarkMode ? "text-white" : "text-bgBlackMedium"
          } flex items-center gap-5 border-[1px] border-gray-500 rounded-full px-3 py-2 cursor-pointer`}
        >
          <Typography type="p" children="MQL/CR" className=" !text-xs" />{" "}
          <img src={Set} alt="settings" />
        </div>
        <div
          className={`${
            isDarkMode ? "text-white" : "text-bgBlackMedium"
          } flex items-center gap-5 border-[1px] border-gray-500 rounded-full px-3 py-2 cursor-pointer`}
        >
          <Typography type="p" children="Sales" className=" !text-xs" />{" "}
          <img src={Set} alt="settings" />
        </div>
      </div>
      <div className="mt-3">
        <CustomTable cols={columns} rows={data} isLoading={false} />
      </div>
    </div>
  );
};

export default Report;
