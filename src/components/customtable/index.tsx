import { Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox/Checkbox";
import classNames from "classnames";
import { useState } from "react";
import { BsClipboard } from "react-icons/bs";
import { TbLoaderQuarter } from "react-icons/tb";
import { useTheme } from "../../context/index.tsx";
import TableData from "../tableData.tsx";
import Typography from "../typography/index.tsx";
import { ITable } from "./types/index.ts";

function CustomTable({ cols, rows, isLoading, emptyTableStyle }: ITable) {
  const { isDarkMode } = useTheme();
  const [dataArray, setDataArray] = useState<number[]>([]);
  const [checkAll, setCheckAll] = useState(false);

  const checkedAllData = (index: number) => {
    let newDataArray = [...dataArray];
    if (!dataArray.includes(index)) {
      newDataArray = [...dataArray, index];
    } else {
      newDataArray = dataArray?.filter((item) => item !== index);
    }
    setDataArray(newDataArray);
    setCheckAll(rows.length === newDataArray.length);
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setDataArray(e.target.checked ? rows.map((_, index) => index) : []);
    setCheckAll(e.target.checked);
  };

  return (
    <div className="w-full h-[500px] overflow-scroll">
      <table
        className={classNames(
          `w-full text-left border-spacing-y-3.5 border-spacing-x-3.5 ${
            isDarkMode ? "bg-bgBlackMedium text-white" : "bg-white"
          }`,
          isLoading ? "animate-pulsed" : ""
        )}
      >
        <thead
          className={`sticky top-0 left-0 z-50 ${
            isDarkMode ? "bg-bgBlackMedium" : "bg-white"
          }`}
        >
          <tr>
            {cols.map((col, idx) => (
              <th
                className={classNames("py-5 px-3 text-base font-medium")}
                key={idx}
              >
                {col.dataIndex === "checkbox" ? (
                  <div className="">
                    <Checkbox checked={checkAll} onChange={onCheckAllChange} />
                  </div>
                ) : null}
                {col.dataIndex !== "checkbox" && col.title ? (
                  <div className="flex gap-2">
                    {col.title} <img src={`${col.icon}`} alt="heading icon" />{" "}
                  </div>
                ) : null}
              </th>
            ))}
          </tr>
        </thead>

        <tbody
          className={`${
            isDarkMode ? "bg-bgBlack text-white" : "bg-[#F5F5FC] text-red-500"
          } w-[90%] px-5`}
        >
          {isLoading ? (
            <tr className="absolute inset-0 block ">
              <td
                colSpan={9999}
                className={`flex h-full items-center  justify-center`}
              >
                <div className=" grid justify-items-center">
                  <span className="inline-block animate-spin text-6xl">
                    <TbLoaderQuarter />
                  </span>
                  <p className="mt-3">fetching data...</p>
                </div>
              </td>
            </tr>
          ) : null}

          {rows?.length === 0 || emptyTableStyle ? (
            <tr>
              <td colSpan={9999} className={emptyTableStyle}>
                {!isLoading && (
                  <div className="grid justify-items-center">
                    <span className="text-black">
                      <BsClipboard />
                    </span>
                    <Typography type="p" children="No data Available" />
                  </div>
                )}
              </td>
            </tr>
          ) : null}

          {rows?.length > 0
            ? rows?.map((row, idx) => (
                <tr key={idx} className="text-sm text-[#464F54] ">
                  {cols.map((col, id) => (
                    <>
                      <TableData
                        key={id}
                        row={row}
                        col={col}
                        selected={dataArray?.includes(idx)}
                        onSelect={() => checkedAllData(idx)}
                      />
                    </>
                  ))}
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
}

export default CustomTable;
