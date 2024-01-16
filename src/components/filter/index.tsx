import {
  DatePicker,
  DatePickerProps,
  Radio,
  RadioChangeEvent,
  Space,
} from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";
import moment from "moment";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context";

const dateFormat = "YYYY-MM-DD";

type FilterOption = {
  date: { date: string };
};

type FilterPropType = {
  onFilter: (date?: { date: string }) => void;
};

const DateFilter: React.FC<FilterPropType> = ({ onFilter }) => {
  const [value, setValue] = useState("today");
  const [month, setMonth] = useState("");
  const [week, setWeek] = useState("");
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const today = moment().format(dateFormat);

  const radio = [
    { title: "Specific Date ", value: "range" },
    { title: "Today", value: "today" },
    { title: "Yesterday", value: "yesterday" },
    { title: "Week", value: "week" },
    { title: "Month", value: "month" },
  ];

  const [size, ,] = useState<SizeType>("middle");

  const FilterOptions: Record<string, FilterOption> = {
    today: {
      date: { date: moment().format(dateFormat) },
    },
    yesterday: {
      date: {
        date: moment().subtract(1, "days").format(dateFormat),
      },
    },
  };

  const onChange = (e: RadioChangeEvent) => {
    const date = FilterOptions[e.target.value]?.date;
    setValue(e.target.value);
    onFilter(date);
    // Update the URL
    const params = new URLSearchParams(location.search);
    params.set("date", date?.date || "");
    navigate(`?${params.toString()}`);
  };

  const handleChange = (type: "m" | "w", dateString: string) => {
    const formattedDate = dayjs(dateString).format("YYYY-MM");
    console.log("params formatted", formattedDate);
    if (type === "m") {
      setMonth(formattedDate);
    } else {
      setWeek(formattedDate);
    }
    if (!month || !week) return;
    else {
      // Update the URL with the selected date range
      const params = new URLSearchParams(location.search);
      params.set("date", month);
      //   params.set("date", week);
      navigate(`?${params.toString()}`);
    }
  };

  const handleMonthChange = (
    _: DatePickerProps["value"] | RangePickerProps["value"],
    dateString: string
  ) => {
    const formattedDate = moment(dateString).format("YYYY-MM");
    setMonth(formattedDate);
    if (!month) return;
    const params = new URLSearchParams(location.search);
    params.set("date", month);
    navigate(`?${params.toString()}`);
  };

  const handleWeekChange = (
    _: DatePickerProps["value"] | RangePickerProps["value"],
    dateString: string
  ) => {
    setWeek(dateString);
    if (!week) return;
    const params = new URLSearchParams(location.search);
    params.set("date", week);
    navigate(`?${params.toString()}`);
  };

  useEffect(() => {
    month && handleMonthChange(undefined, month);
  }, [month]);

  useEffect(() => {
    week && handleWeekChange(undefined, week);
  }, [week]);

  return (
    <div>
      <Radio.Group onChange={onChange} value={value}>
        <Space direction="vertical">
          {radio?.map((item, idx) => {
            return (
              <Radio
                key={idx}
                value={item.value}
                className={`rounded-3xl px-4 py-2 text-xs border-[1px]  ${
                  isDarkMode ? "border-[#6F6F76] text-white" : "border-[2px]"
                } ${item.value === value.toString() && " border-[#f9A825]"}`}
              >
                {item.value === "month" && value === "month" ? (
                  <DatePicker
                    size={size}
                    picker="month"
                    onChange={handleMonthChange}
                  />
                ) : item.value === "week" && value === "week" ? (
                  <DatePicker
                    size={size}
                    picker="week"
                    onChange={handleWeekChange}
                  />
                ) : item.value === "range" && value === "range" ? (
                  <DatePicker.RangePicker
                    status="error"
                    style={{ width: "100%" }}
                  />
                ) : (
                  item.title
                )}
              </Radio>
            );
          })}
        </Space>
      </Radio.Group>
    </div>
  );
};

export default DateFilter;
