/*
 * @Descripttion:
 * @version:
 * @Author: captern@icloud.com
 * @Date: 2022-07-26 16:58:10
 * @LastEditors: captern
 * @LastEditTime: 2022-07-26 17:37:03
 */
import React, { useState } from "react";
import { Radio, Tabs, Typography, version, Card } from "antd";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";

import type { SizeType } from "antd/es/config-provider/SizeContext";
const { TabPane } = Tabs;
const { Title } = Typography;
const Starship: React.FC = () => {
  const environment = ["dev", "sbx", "sit"];
  const navigate = useNavigate();

  return (
    <div>
      <Card title={<Title level={3}>星空云门户控制台</Title>}>
        <p>C 端用户控制的平台 包含各个内容</p>
      </Card>
      <Tabs
        defaultActiveKey="1"
        type="card"
        size="large"
        style={{ marginTop: 40 }}
      >
        {environment?.map((item) => {
          return (
            <TabPane tab={`${item} 环境`} key={item}>
              <div>{item} 环境 </div>
              <a
                href="http://dev-starship-console.voneyun.com/"
                target="_blank"
                rel="noreferrer"
                title="星空云控制台"
              >
                http://dev-starship-console.voneyun.com/
              </a>
            </TabPane>
          );
        })}
      </Tabs>
    </div>
  );
};
export default Starship;
