import "./Sidebar.css";
import React from "react";
import {
  Dashboard,
  PersonOutline,
  LocalShipping,
  CreditCard,
  Store,
  // InsertChart,
  // SettingsApplications,
  ExitToApp,
  // NotificationsNone,
  // SettingsSystemDaydreamOutlined,
  // PsychologyOutlined,
  AccountCircleOutlined,
} from "@mui/icons-material";

import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const { pathname } = location;

  const menuItems = [
    { title: "MAIN", items: [
      { path: "/", icon: <Dashboard className="icon" />, label: "Dashboard" }
    ]},
    { title: "COMMERCE", items: [
      { path: "/users", icon: <PersonOutline className="icon" />, label: "Users" },
      { path: "/products", icon: <Store className="icon" />, label: "Products" },
      { path: "/orders", icon: <CreditCard className="icon" />, label: "Orders" },
      { path: "/delivery", icon: <LocalShipping className="icon" />, label: "Delivery" }
    ]},
    // { title: "USEFUL", items: [
    //   { path: "/stats", icon: <InsertChart className="icon" />, label: "Stats" },
    //   { path: "/notifications", icon: <NotificationsNone className="icon" />, label: "Notifications" }
    // ]},
    // { title: "SERVICE", items: [
    //   { path: "/system-health", icon: <SettingsSystemDaydreamOutlined className="icon" />, label: "System Health" },
    //   { path: "/logs", icon: <PsychologyOutlined className="icon" />, label: "Logs" },
    //   { path: "/settings", icon: <SettingsApplications className="icon" />, label: "Settings" }
    // ]},
    { title: "USER", items: [
      { path: "/profile", icon: <AccountCircleOutlined className="icon" />, label: "Profile" },
      { path: "/logout", icon: <ExitToApp className="icon" />, label: "Logout" }
    ]}
  ];

  const isActive = (path) => {
    return pathname === path ? "active" : "";
  };

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Styluxe CMS</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          {menuItems.map((group, index) => (
            <React.Fragment key={index}>
              <p className="title">{group.title}</p>
              {group.items.map((item, idx) => (
                <Link to={item.path} key={idx} style={{ textDecoration: "none" }}>
                  <li className={isActive(item.path)}>
                    {item.icon}
                    <span>{item.label}</span>
                  </li>
                </Link>
              ))}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
