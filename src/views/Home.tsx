import React, { useState } from "react";
import { Breadcrumb, Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
import MainMenu from "../components/MainMenu/index";
const { Header, Content, Footer, Sider } = Layout;
const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  // const navigateTo = useNavigate();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* 左侧边栏 */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <MainMenu></MainMenu>
      </Sider>
      {/* 右边内容 */}
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            paddingLeft: "16px",
          }}
        >
          <Breadcrumb style={{ lineHeight: "64px" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        <Content
          style={{ margin: "16px 16px 0", background: colorBgContainer }}
          className="ant-layout-content ant-layout-content  css-dev-only-do-not-override-14wwjjs"
        >
          <Outlet />
        </Content>
        <Footer style={{ textAlign: "center", padding: 0, lineHeight: "48px" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
