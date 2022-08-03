import { MdDashboard } from "react-icons/md";
import { GiCog, GiMoneyStack } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
import { BiGroup } from "react-icons/bi";
import { TiClipboard } from "react-icons/ti";
import { BsBookmarkStar, BsSliders } from "react-icons/bs";
import { RiGroupLine, RiUserStarLine } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

export const multipleDashboardData = [
  {
    icon: <MdDashboard />,
    title: "Dashboard",
    link: "/dashboard/multiple",
  },
  {
    icon: <CgProfile />,
    title: "Profile",
    link: "/dashboard/multiple/profile",
  },
  {
    icon: <GiCog />,
    title: "Service",
    dropdownList: [
      {
        title: "Employee List",
        link: "/multiple_dashboard/appoinment",
      },
      {
        title: "Employee Attendance",
        link: "/multiple_dashboard/appoinment",
      },
      {
        title: " Employee Salary ",
        link: "/multiple_dashboard/appoinment",
      },
      {
        title: "Company Holiday",
        link: "/multiple_dashboard/appoinment",
      },
    ],
  },
  {
    icon: <AiOutlineUser />,
    title: "Members",
    link: "/dashboard/multiple/members",
  },
  {
    icon: <BiGroup />,
    title: "Group",
    dropdownList: [
      {
        title: "Class Test Routine",
        link: "/multiple_dashboard/group",
      },
      {
        title: "Employee Attendance",
        link: "/multiple_dashboard/appoinment",
      },
      {
        title: " Employee Salary ",
        link: "/multiple_dashboard/appoinment",
      },
      {
        title: "Company Holiday",
        link: "/multiple_dashboard/appoinment",
      },
    ],
  },
  {
    icon: <TiClipboard />,
    title: "Notice",
    dropdownList: [
      {
        title: "Employee List",
        link: "/dashboard_1/notice",
      },
    ],
  },
  {
    icon: <BsBookmarkStar />,
    link: "/dashboard/multiple/appointment",
    title: "Appointment",
  },
  {
    icon: <RiGroupLine />,
    title: "Staff & Partner",
    dropdownList: [
      {
        title: "Employee List",
        link: "/multiple_dashboard/staff_and_partner",
      },
    ],
  },
  {
    icon: <GiMoneyStack />,
    title: "Expenses",
    link: "/dashboard/multiple/expenses",
  },
  {
    icon: <IoWalletOutline />,
    title: "Account Balance",
    dropdownList: [
      {
        title: "Employee List",
        link: "/multiple_dashboard/appoinment",
      },
    ],
  },
  {
    icon: <RiUserStarLine />,
    title: "Customer Review",
    dropdownList: [
      {
        title: "Employee List",
        link: "/multiple_dashboard/appoinment",
      },
    ],
  },
  {
    icon: <BsSliders />,
    title: "Settings",
    dropdownList: [
      {
        title: "Employee List",
        link: "/multiple_dashboard/appoinment",
      },
    ],
  },
];
