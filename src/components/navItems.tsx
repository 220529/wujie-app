// navItems.ts
import {
  UserOutlined,
  MailOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import Home from "../pages/Home";
import React19 from "../pages/React19";
import Vue3 from "../pages/Vue3";

export const navItems = [
  {
    path: "/",
    label: "Home",
    icon: <UserOutlined />,
    component: <Home />,
  },
  {
    path: "/react19",
    label: "react19",
    icon: <MailOutlined />,
    component: <React19 />,
  },
  {
    path: "/vue3",
    label: "vue3",
    icon: <AppstoreOutlined />,
    component: <Vue3 />,
  },
];
