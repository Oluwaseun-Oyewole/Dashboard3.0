import { ReactNode } from "react";
import Analytics from "../assets/svg/analytics.svg";
import Calender from "../assets/svg/calender.svg";
import Chat from "../assets/svg/chat.svg";
import Dashboard from "../assets/svg/dashboard.svg";
import Play from "../assets/svg/play.svg";
import Reports from "../assets/svg/reports.svg";
import { Routes } from "./routes";

export interface AppRoutesType {
  id: number;
  path: string;
  name: string;
  icon: ReactNode;
}
[];

export const appRoutes: AppRoutesType[] = [
  {
    id: 1,
    path: Routes.dashboard,
    name: "Main Board",
    icon: Dashboard,
  },

  { id: 2, path: Routes.analytics, name: "Analytics", icon: Analytics },
  { id: 3, path: Routes.report, name: "Reports", icon: Reports },
  { id: 4, path: Routes.calender, name: "Calender", icon: Calender },
  { id: 5, path: Routes.chat, name: "Chat", icon: Chat },
  { id: 6, path: Routes.chat, name: "Play", icon: Play },
];
