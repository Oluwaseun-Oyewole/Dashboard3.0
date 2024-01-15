import { CheckboxChangeEvent } from "antd/es/checkbox";
import { ReactNode } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type IContextTable = {
  data: any[];
};

export type THeaderObj = {
  title: string;
  dataIndex?: string;
  key: string;
  icon?: ReactNode;
  render?: (text: string) => ReactNode;
};

export type ITableBase = {
  cols: THeaderObj[];
  isLoading?: boolean;
  emptyTableStyle?: string;
};

export interface ITable extends ITableBase {
  title?: string;
  rows: any[];
  selected?: boolean;
  onSelect?: (e: CheckboxChangeEvent) => void;
}
