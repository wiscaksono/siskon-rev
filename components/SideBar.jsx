import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const menu = [
  { title: "Home", path: "/" },
  { title: "Explore", path: "/praktikum" },
  { title: "Notifications", path: "/notifications" },
];

const Sidebar = () => {
  const router = useRouter();

  return (
    <div>
      {menu.map((item, index) => {
        return (
          <Link key={index} href={item.path}>
            <a
              className={`cursor-pointer ${
                router.pathname === item.path
                  ? "text-blue-500"
                  : "hover:bg-gray-900 hover:text-blue-500"
              }`}
            >
              {item.title}
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
