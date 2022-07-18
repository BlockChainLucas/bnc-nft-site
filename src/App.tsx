/*
 * @Descripttion:
 * @version:
 * @Author: captern@icloud.com
 * @Date: 2022-07-07 17:56:38
 * @LastEditors: captern
 * @LastEditTime: 2022-07-13 19:40:36
 */
import React from "react";
import "./App.css";
import axios, { AxiosError, AxiosResponse } from "./utils/axios";
const baseUrl =
  "https://www.fastmock.site/mock/859d7dac3dffcae51487fb02ad0d2a8a/captern";
const App: React.FC = () => {
  // const getRequrst: void = axios({
  //   url: baseUrl + "/get",
  //   method: "get",
  //   params: {
  //     id: 1,
  //   },
  // });
  // const getRequrst1: void = axios({
  //   url: baseUrl + "/get",
  //   method: "get",
  //   params: {
  //     id: [1, 2],
  //   },
  // });
  // const getRequrst2: void = axios({
  //   url: baseUrl + "/get",
  //   method: "get",
  //   params: {
  //     id: {
  //       name: "test",
  //     },
  //   },
  // });
  const getRequrst3 = axios({
    url: baseUrl + "/get?id=1",
    method: "get",
    timeout: 10,
    params: {
      id: 1,
    },
  })
    .then((res) => {
      console.log(res);
    })
    .catch((e: AxiosError) => {
      console.log(e.code);
      console.log(e.message);
    });

  // const getRequrst5 = axios({
  //   url: baseUrl + "/post",
  //   method: "post",
  //   // responseType: "json",
  //   data: array,
  // }).then((res: AxiosResponse) => {
  //   console.log("getRequrst5", res);
  // });

  axios.interceptors.request.use((config) => {
    console.log("request", config);
    config.headers.test += "1";
    return config;
  });
  axios.interceptors.request.use((config) => {
    console.log("request", config);
    config.headers.test += "2";
    return config;
  });
  axios.interceptors.request.use((config) => {
    console.log("request", config);
    config.headers.test += "3";
    return config;
  });
  interface ResponseData<T> {
    code: number;
    data: T;
    message: string;
  }
  interface User {
    name: string;
    age: number;
  }

  interface UserTwo {
    name: string;
    age: number;
    desc: string;
  }
  axios.defaults.headers.common["csdacsdacdsa"] = "common";

  function getUser<T>() {
    return axios<ResponseData<T>>(baseUrl + "/get").then((res) => res.data);
  }
  async function name() {
    const user = await getUser<User>();
    const user1 = await getUser<UserTwo>();
    if (user) {
      console.log(user);
    }
  }

  // name();

  const array = new Int32Array([21, 22]);
  const getRequrst4 = axios({
    url: baseUrl + "/post",
    headers: {
      Accept: "text/plain",
      test: "",
    },
    method: "post",
    data: {
      a: 1,
      b: 2,
    },
  }).then((res: AxiosResponse) => {
    console.log(res);
  });
  return (
    <div className="App">
      {/* <button onClick={() => getRequrst}>+</button> */}
      Demo
    </div>
  );
};

export default App;
