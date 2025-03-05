import { GrTransaction, GrDashboard } from "react-icons/gr";
import { MdOutlineTrendingUp, MdTrendingDown } from "react-icons/md";

export const menuItems = [
  {
    id: 1,
    title: "Dashboard",
    icon: <GrDashboard />,
    link: "/dashboard",
  },
  {
    id: 2,
    title: "View Transactions",
    icon: <GrTransaction />,
    link: "/dashboard",
  },
  {
    id: 3,
    title: "Incomes",
    icon: <MdOutlineTrendingUp />,
    link: "/dashboard",
  },
  {
    id: 4,
    title: "Expense",
    icon: <MdTrendingDown />,
    link: "/dashboard",
  },
];
