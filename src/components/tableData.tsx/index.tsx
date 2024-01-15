import { Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import classNames from "classnames";
import { useTheme } from "../../context";

export type ITableData = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  row: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  col: any;
  className?: string;
  selected?: boolean;
  onSelect?: (e: CheckboxChangeEvent) => void;
};

function TableData({ row, col, className, selected, onSelect }: ITableData) {
  const { isDarkMode } = useTheme();

  let template;
  switch (col.dataIndex) {
    case "checkbox":
      template = <Checkbox checked={selected} onChange={onSelect} />;
      break;

    default:
      template = (
        <span className="w-full pt-4 pb-5 grid grid-flow-col grid-cols-[max-content_auto_max-content] items-center gap-2">
          {col.render ? (
            <>
              <img src={row?.preSrc} />
              {col.render(row[col.key])} <img src={row?.postSrc} />
            </>
          ) : (
            row[col.key]
          )}
        </span>
      );
      break;
  }

  return (
    <td
      className={classNames(
        `flex-1 cursor-pointer border-[1px] transition-none ease-in-out duration-700 ${
          isDarkMode
            ? "border-gray-700 text-white hover:bg-bgBlackMedium"
            : " border-gray-200 hover:bg-gray-100"
        } ${
          row.name === "Total" ? "font-extrabold" : ""
        } py-2  px-3 text-sm font-normal`,
        selected && isDarkMode && "bg-bgBlackMedium",
        selected && !isDarkMode && "bg-white",
        className
      )}
    >
      {template}
    </td>
  );
}

export default TableData;
