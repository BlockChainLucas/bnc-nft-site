/*
 * @Descripttion:
 * @version:
 * @Author: captern@icloud.com
 * @Date: 2022-07-26 11:01:10
 * @LastEditors: captern
 * @LastEditTime: 2022-07-26 16:59:36
 */
import { RouteObject } from "react-router-dom";
import Starship from "../views/developer/starship/starship";
const Home = () => {
  return <div>Home</div>;
};

const Index = () => {
  return <div>Index</div>;
};
const Child = () => {
  return <div>Child Index</div>;
};
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
  {
    path: "/developer",
    label: "开发团队",
    key: "developer",
    children: [
      {
        path: "/developer/starship",
        element: <Starship />,
        label: "星空云",
        key: "starship",
      },
      {
        path: "/developer/child-two",
        element: <Index />,
        label: "详情页",
        key: "child-two",
      },
    ],
  },
  {
    path: "/product",
    element: <Index />,
    label: "产品团队",
    key: "product",
    children: [
      {
        path: "/product/child-one",
        element: <Index />,
        label: "详情页",
        key: "child-one",
      },
      {
        path: "/product/child-two",
        element: <Index />,
        label: "详情页",
        key: "child-two",
      },
    ],
  },
  {
    path: "/test",
    element: <Index />,
    label: "测试团队",
    key: "test",
    children: [
      {
        path: "/test/child-one",
        element: <Index />,
        label: "详情页",
        key: "child-one",
      },
      {
        path: "/test/child-two",
        element: <Index />,
        label: "详情页",
        key: "child-two",
      },
    ],
  },
];

export default routes;
