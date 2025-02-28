// Navs.tsx
import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router";
import { navItems } from "./navItems";

const Navs: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // 状态来跟踪选中的菜单项
  const [selectedKey, setSelectedKey] = useState(location.pathname);

  // 将 navItems 映射为 items 数组
  const menuItems = navItems.map((item) => ({
    key: item.path,
    icon: item.icon,
    label: item.label,
  }));

  // 处理菜单项点击事件
  const onClick = (e: { key: string }) => {
    setSelectedKey(e.key); // 更新选中的 key
    navigate(e.key); // 跳转到对应的路由
  };

  // 监听 location 的变化，确保路由变化时菜单项同步更新
  useEffect(() => {
    setSelectedKey(location.pathname);
  }, [location.pathname]);

  return (
    <Menu
      mode="inline"
      selectedKeys={[selectedKey]} // 使用当前选中的 key
      items={menuItems}
      onClick={onClick} // 绑定点击事件
    />
  );
};

export default Navs;
