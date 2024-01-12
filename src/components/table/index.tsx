import { Table } from "antd";
import type { TablePaginationConfig, TableProps } from "antd/es/table";
import { FilterValue } from "antd/es/table/interface";
import classNames from "classnames";
import React from "react";

export interface TableParams {
  pagination?: TablePaginationConfig;
  sortField?: string;
  sortOrder?: string;
  filters?: Record<string, FilterValue | null>;
}

interface CustomTableProps extends TableProps<any> {
  // additional props
  isClickable?: boolean;
}

const CustomTable: React.FC<CustomTableProps> = ({
  columns,
  dataSource = [],
  pagination,
  onChange,
  isClickable,
  ...rest
}) => {
  return (
    <div
      className={classNames(["table", isClickable && "table-clickable-row"])}
    >
      <Table
        dataSource={dataSource}
        columns={columns}
        onChange={onChange}
        pagination={pagination}
        {...rest}
        className="relative z-10"
      />
    </div>
  );
};

export default CustomTable;
