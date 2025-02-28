// LayoutWrapper.tsx
import React from "react";
import { Layout } from "antd";
import Navs from "./Navs";

const { Sider, Content } = Layout;

interface LayoutWrapperProps {
  children: React.ReactNode;
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => (
  <Layout style={{ minHeight: "100vh" }}>
    <Sider width={200} style={{ background: "#fff" }}>
      <Navs />
    </Sider>
    <Layout style={{ padding: "0 24px 24px" }}>
      <Content style={{ padding: 24, margin: 0, minHeight: 280 }}>
        {children}
      </Content>
    </Layout>
  </Layout>
);

export default LayoutWrapper;
