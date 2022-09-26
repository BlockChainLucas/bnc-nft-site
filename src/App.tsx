/*
 * @Descripttion:
 * @version:
 * @Author: captern@icloud.com
 * @Date: 2022-07-07 17:56:38
 * @LastEditors: captern
 * @LastEditTime: 2022-07-26 13:32:51
 */
import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router/router";
import "./App.css";

const App: React.FC = () => {
  const Views = () => useRoutes(routes);

  return (
    <div className="App">
       <Views />
    </div>
  );
};

export default App;
