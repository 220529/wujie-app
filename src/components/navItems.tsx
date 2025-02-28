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
    path: "/react-v19",
    label: "react-v19",
    icon: <MailOutlined />,
    component: <React19 />,
  },
  {
    path: "/vue-v3",
    label: "vue-v3",
    icon: <AppstoreOutlined />,
    component: <Vue3 />,
  },
];
