/*
 * @Descripttion:
 * @version:
 * @Author: captern@icloud.com
 * @Date: 2022-07-26 11:01:10
 * @LastEditors: captern
 * @LastEditTime: 2022-07-26 16:59:36
 */
import { RouteObject } from "react-router-dom";
import Home from "../views/Home/Home";

type Routes = RouteObject & {
  label: string;
  key: string;
  children?: Routes[];
};

const routes: Routes[] = [
  {
    path: "/",
    element: <Home />,
    label: "首页",
    key: "home",
  },
  // {
  //   path: "/test/",
  //   element: <Home />,
  //   label: "首页",
  //   key: "home",
  // },
];

export default routes;
