import React from "react";

import { IoHomeSharp } from "react-icons/io5";
import { FaMessage } from "react-icons/fa6";
import { IoLibrary } from "react-icons/io5";
import { FaMusic } from "react-icons/fa";
import { RiLogoutBoxRFill } from "react-icons/ri";

import logo from "../assets/logo.png";
import profile from "../assets/bethdoe.png";

const navItems = [
  { id: 1, name: "Home", path: "/", icon: <IoHomeSharp className="size-5" /> },
  {
    id: 2,
    name: "Songs",
    path: "/songs",
    icon: <FaMusic className="size-5" />,
  },
  {
    id: 3,
    name: "Messages",
    path: "/messages",
    icon: <FaMessage className="size-5" />,
  },
  {
    id: 4,
    name: "Playlist",
    path: "/playlist",
    icon: <IoLibrary className="size-5" />,
  },
  {
    id: 5,
    name: "My Profile",
    path: "/profile",
    icon: "",
  },
];

const Sidebar = () => {
  return (
    <div className="hidden lg:flex px-3 py-5 flex-1 bg-blue-600">
      <nav className="space-y-12">
        <div className="flex flex-col items-center justify-between h-full">
          <div className="p-2 rounded-lg">
            <img alt="logo" src={logo} className="size-5" />
          </div>
          <ul className="flex flex-col gap-8">
            {navItems.map((nav) => (
              <li key={nav.id}>
                <div className="p-2 rounded-lg hover:bg-slate-500">
                  {nav.icon}
                </div>
              </li>
            ))}
          </ul>
          <button className="p-2 rounded-lg hover:bg-slate-500">
            <RiLogoutBoxRFill className="size-6" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
