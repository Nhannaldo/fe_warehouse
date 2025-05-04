import React from "react";
import { Layout } from "antd";
import Header from "./components/Header";
import Sider from "./components/Sider";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
const { Content } = Layout;

const AppLayout: React.FC = () => {
  return (
    <Layout className="h-full">
      {/* Header */}
      <Header />

      <Layout>
        {/* Sider */}
        <Sider />

        {/* Content */}
        <Layout className="p-4">
          <Content className="bg-white p-4 shadow">
            <Outlet />
          </Content>
        </Layout>
      </Layout>

      {/* Footer */}
      <Footer />
    </Layout>
  );
};

export default AppLayout;
