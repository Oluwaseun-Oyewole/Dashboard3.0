import Call from "../assets/svg/call.svg";
import Check from "../assets/svg/check.svg";
import Mic from "../assets/svg/mic.svg";
import Notification from "../assets/svg/notification.svg";

type PageTitle = {
  [key: string]: string;
};

export const PageTitle: PageTitle = {
  dashboard: "Dashboard",
  leaderBoard: "LeaderBoard",
  order: "Order",
  products: "Products",
  settings: "Settings",
  sales: "Sales Report",
  messages: "Messages",
  signOut: "signOut",
};

export const TaskScheduleDetails = [
  {
    taskName: "Q2 Planning",
    time: "11:00 PM Wed",
    check: Check,
    noti: Notification,
  },

  {
    taskName: "Carl BRD 38 years",
    todo: "Send mail with congratulations",
    check: Check,
    call: Call,
  },

  {
    taskName: "Meeting With Jonathan",
    time: "02:30 PM Wed",
    check: Check,
    mic: Mic,
  },

  {
    taskName: "Call To Micheal",
    time: "03:30 PM Wed",
    check: Check,
    call: Call,
  },
  {
    taskName: "Talk To Dolapo",
    time: "02:30 PM Wed",
    todo: "Check all task for last week",
    check: Check,
    call: Call,
  },
  {
    taskName: "Meeting With James",
    time: "05:30 PM Wed",
    check: Check,
    call: Call,
  },

  {
    taskName: "Meeting With Donald",
    time: "06:30 PM Wed",
    todo: "Talk about work life balance in the meeting",
    check: Check,
    call: Call,
  },
  {
    taskName: "Carl BRD 38 years",
    todo: "Send mail with congratulations",
    check: Check,
    call: Call,
  },

  {
    taskName: "Meeting With Jonathan",
    time: "02:30 PM Wed",
    check: Check,
    mic: Mic,
  },

  {
    taskName: "Call To Micheal",
    time: "03:30 PM Wed",
    check: Check,
    call: Call,
  },
  {
    taskName: "Talk To Dolapo",
    time: "02:30 PM Wed",
    todo: "Check all task for last week",
    check: Check,
    call: Call,
  },
  {
    taskName: "Meeting With James",
    time: "05:30 PM Wed",
    check: Check,
    call: Call,
  },

  {
    taskName: "Meeting With Donald",
    time: "06:30 PM Wed",
    todo: "Talk about work life balance in the meeting",
    check: Check,
    call: Call,
  },
];

export const Liads = [
  {
    name: "MQL",
    amount: "3456",
    title: "Conversion rate",
    percentage: "51%",
  },

  {
    name: "SQL",
    amount: "2456",
    title: "Conversion rate",
    percentage: "38%",
  },

  {
    name: "Meeting",
    amount: "956",
    title: "Conversion rate",
    percentage: "59%",
  },

  {
    name: "Sells",
    amount: "567",
  },
];
