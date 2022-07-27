/*
 * @Descripttion:
 * @version:
 * @Author: captern@icloud.com
 * @Date: 2022-07-26 11:47:39
 * @LastEditors: captern
 * @LastEditTime: 2022-07-26 16:46:26
 */
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { useRoutes, matchRoutes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./style.css";
import routes from "../router/router";
const LayoutContainer: React.FC = () => {
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const matchRoute: any = matchRoutes(routes, window.location.pathname) || [];
  let selectKeys: string[] = [];
  matchRoute.forEach((item: any) => {
    selectKeys.push(item.route.key);
  });
  const Views = () => useRoutes(routes);
  const navigate = useNavigate();
  const menuClick = (e: any) => {
    const { item, key, keyPath, domEvent } = e;
    navigate(item.props.path);
  };
  return (
    <Layout className="layout-container">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          onClick={menuClick}
          theme="dark"
          mode="inline"
          defaultOpenKeys={selectKeys}
          selectedKeys={selectKeys}
          items={routes}
        />
      </Sider>
      <Layout>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Views />
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutContainer;
