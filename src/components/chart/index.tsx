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
  annotations?: any;
  showLines?: boolean;
  isAnnotate?: boolean;
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
  annotations,
  showLines,
}) => {
  const { isDarkMode } = useTheme();

  const yaxisOptions = {
    show: true,
    labels: {
      show: yAxisLabel ? true : false,
      style: {
        colors: "gray",
        fontSize: "13px",
        fontWeight: 300,
        fontFamily: "Poppins",
      },
      formatter: (value: any) => {
        return type !== "line" && type !== "area" && value > 0
          ? `${value}`
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
    annotations: annotations,
    legend: {
      show: true,

      labels: {
        colors: isDarkMode ? "whitesmoke" : "",
        fontFamily: "Poppins",
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
      strokeDashArray: 0,
      borderColor: "#212121",
      opacity: 0.3,
      yaxis: {
        lines: {
          show: showLines && true,
          colors: "#000",
          style: {
            colors: "red",
          },
        },
      },
      xaxis: {
        lines: {
          show: showLines && true,
        },
        labels: {
          show: false,
          style: {},
        },
        axisBorder: {
          show: true,
          color: "red",
          height: 1,
          width: "20%",
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
      row: {
        opacity: 0.3,
      },
      column: {
        opacity: 0.2,
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
    fontFamily: "Poppins",

    plotOptions: {
      fontFamily: "Poppins",
      radialBar: {
        inverseOrder: false,
        fontFamily: "Poppins",
        offsetX: 0,
        offsetY: 0,
        hollow: {
          margin: 5,
          size: "25%",
          background: "transparent",
          fontFamily: "Poppins",
        },
        track: {
          show: true,
          background: "#6F6F76",
          fontFamily: "Poppins",
          opacity: 0.3,
        },
        dataLabels: {
          show: true,
          name: {
            show: true,
            fontSize: "10px",
            fontFamily: "Poppins",
            fontWeight: 400,
            color: undefined,
            offsetY: -10,
          },
          value: {
            show: true,
            fontSize: "12px",
            fontFamily: "Poppins",
            fontWeight: 400,
            color: "white",
            offsetY: 16,
            formatter: function (val: number) {
              return val + "%";
            },
          },
        },
      },
    },
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
