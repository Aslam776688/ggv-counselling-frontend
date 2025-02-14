import {
  LayoutDashboard,
  DatabaseZap,
  User,
  SquareCheckBig,
  Settings,
  ChevronRight,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ page }) => {
  return (
    <>
      <div className="w-[20%] min-h-screen bg-white shadow-xl fixed">
        <ul className="flex flex-col gap-1 tracking-wider pt-[6em] pl-8 text-stone-700">
          <li
            className={page == "dashboard" ? "font-semibold text-blue-700" : ""}
          >
            <Link
              to="/dashboard"
              className="md:px-3 py-2 flex items-center gap-4"
            >
              <LayoutDashboard size={18} /> Dashboard{" "}
              <ChevronRight
                className={page == "dashboard" ? "inline" : "hidden"}
              />
            </Link>
          </li>
          <li
            className={page == "cuet-data" ? "font-semibold text-blue-700" : ""}
          >
            <Link
              to="/dashboard/cuet-data"
              className="md:px-3 py-2 flex items-center gap-4 "
            >
              <DatabaseZap size={18} /> CuetData{" "}
              <ChevronRight
                className={page == "cuet-data" ? "inline" : "hidden"}
              />
            </Link>
          </li>
          <li
            className={
              page == "student-list" ? "font-semibold text-blue-700" : ""
            }
          >
            <Link
              to="/dashboard/student-list"
              className="md:px-3 py-2 flex items-center gap-4 "
            >
              <User size={18} /> StudentList{" "}
              <ChevronRight
                className={page == "student-list" ? "inline" : "hidden"}
              />
            </Link>
          </li>
          <li
            className={page == "selection" ? "font-semibold text-blue-700" : ""}
          >
            <Link
              to="/dashboard/selection"
              className="md:px-3 py-2 flex items-center gap-4 "
            >
              <SquareCheckBig size={18} /> Selection{" "}
              <ChevronRight
                className={page == "selection" ? "inline" : "hidden"}
              />
            </Link>
          </li>
          <li
            className={page == "settings" ? "font-semibold text-blue-700" : ""}
          >
            <Link
              to="/dashboard/settings"
              className="md:px-3 py-2 flex items-center gap-4 "
            >
              <Settings size={18} /> Settings
              <ChevronRight
                className={page == "settings" ? "inline" : "hidden"}
              />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
