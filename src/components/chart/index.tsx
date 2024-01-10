/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import Chart from "react-apexcharts";
import { useTheme } from "../../context";

type TCurve =
  | "smooth"
  | "straight"
  | "stepline"
  | "smooth"
  | "straight"
  | "stepline";

type Props = {
  id: string | "bar-chart";
  series: any | undefined;
  type?: "bar" | any;
  colors?: Array<string>;
  className?: string;
  dropShadowColor?: string;
  strokeColor?: Array<string>;
  height?: number | string;
  width?: number | string;
  xaxisLabel?: boolean;
  yAxisLabel?: boolean;
  stacked?: boolean;
  plotOptions?: boolean;
  showGrid?: boolean;
  categories?: Array<string>;
  label?: Array<string>;
  curve?: TCurve | TCurve[];
  showDownloads?: boolean;
};

export const CustomChart: FC<Props> = ({
  type,
  colors,
  id,
  series,
  className,
  height,
  xaxisLabel,
  yAxisLabel,
  showGrid,
  label,
  categories,
  curve,
  showDownloads,
  stacked,
}) => {
  const { isDarkMode } = useTheme();

  const yaxisOptions = {
    show: true,
    labels: {
      show: yAxisLabel ? true : false,
      // categories: [0, 100, 200, 300, 400],
      style: {
        colors: "gray",
        fontSize: "13px",
        fontWeight: 300,
        fontFamily: "Poppins",
      },
      formatter: (value: any) => {
        return type !== "line" && type !== "area" && value > 0
          ? `${value}K`
          : `${value}`;
      },
    },

    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  };

  const options = {
    chart: {
      id: id,
      toolbar: {
        show: true,
        tools: {
          download: showDownloads ? true : false,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false,
        },
      },
      background: isDarkMode ? "#2C2C2C" : "#FFF",
      // dropShadow: {
      //   enabled: true,
      //   blur: 5,
      //   opacity: 0.2,
      //   color: "grey",
      // },
      stacked: stacked,
    },
    labels: label,
    xaxis: {
      categories: categories || [],
      labels: {
        show: xaxisLabel ?? true,
        style: {
          colors: "gray",
          fontSize: "13px",
          fontWeight: 300,
          fontFamily: "Poppins",
        },
      },
      axisBorder: {
        show: true,
      },
      axisTicks: {
        show: true,
      },
    },
    yaxis: yaxisOptions,
    fill: {
      colors: colors,
    },

    annotations: {
      xaxis: [
        {
          x: 200, // Y-coordinate where the annotation line should be placed
          borderColor: "#6F6F76", // Color of the annotation line
          label: {
            text: "", // Label text
            style: {
              color: "#FF5733", // Color of the label text
            },
          },
          offset: 1,

          image: {
            width: 50, // Width of the image
            height: 50, // Height of the image
            path: "./alert.svg", // Path to your image file
          },
        },

        {
          x: 400, // Y-coordinate where the annotation line should be placed
          borderColor: "#6F6F76", // Color of the annotation line
          label: {
            text: "", // Label text
            style: {
              color: "#FF5733", // Color of the label text
            },
          },
          offset: 4,
          image: "",
        },

        {
          x: 700, // Y-coordinate where the annotation line should be placed
          borderColor: "#6F6F76", // Color of the annotation line
          label: {
            text: "", // Label text
            style: {
              color: "#FF5733", // Color of the label text
            },
          },
          offset: 6,
          image: "",
        },
      ],
    },
    // title: {
    //   text: "Dashboard",

    //   style: {
    //     color: isDarkMode ? "white" : "",
    //     fonFamily: "Poppins",
    //     fontWeight: 200,
    //   },

    // },

    legend: {
      show: true,
      fonFamily: "Poppins",
      labels: {
        colors: "whitesmoke",
      },
    },
    states: {
      hover: {
        filter: { type: "none" },
      },
      active: {
        filter: { type: "none" },
      },
    },
    grid: {
      show: showGrid ?? true,
      strokeDashArray: 5,
      yaxis: {
        lines: {
          show: false,
          colors: "green",
        },
      },
      xaxis: {
        lines: {
          show: false,
        },
        labels: {
          show: false,
          style: {},
        },
        axisBorder: {
          show: true,
          color: "red",
          height: 1,
          width: "10%",
          offsetX: 2,
          offsetY: 2,
        },
        axisTicks: {
          show: true,
          borderType: "solid",
          color: "#000",
          height: 6,
          offsetX: 5,
          offsetY: 5,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      style: {
        fontSize: "12px",
      },
      theme: "dark",
    },
    stroke: {
      show: true,
      colors: colors,
      curve: curve,
    },
    colors: colors,
  };

  return (
    <Chart
      options={options}
      series={series}
      type={type}
      height={height ?? 300}
      className={className}
    />
  );
};
