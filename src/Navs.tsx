import React, { useState, useEffect } from "react";
import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate, useLocation } from "react-router";
import type { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "/",
    label: "Home",
    icon: <MailOutlined />,
  },
  {
    key: "/app1",
    label: "Navigation One",
    icon: <MailOutlined />,
  },
  {
    key: "/app2",
    label: "Navigation Two",
    icon: <AppstoreOutlined />,
  },
];

const App: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation(); // 获取当前路由
  const [selectedKey, setSelectedKey] = useState<string>(location.pathname);

  useEffect(() => {
    // 每当路由变化时，更新 selectedKey
    setSelectedKey(location.pathname);
  }, [location.pathname]);

  const onClick: MenuProps["onClick"] = (e) => {
    setSelectedKey(e.key);
    navigate(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      style={{ height: "100%" }}
      selectedKeys={[selectedKey]} // 使用 selectedKeys 控制激活项
      mode="inline"
      items={items}
    />
  );
};

export default App;
