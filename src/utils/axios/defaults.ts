/*
 * @Descripttion:
 * @version:
 * @Author: captern@icloud.com
 * @Date: 2022-07-13 17:34:40
 * @LastEditors: captern
 * @LastEditTime: 2022-07-25 16:33:01
 */
import { AxiosRequestConfig } from "./types";
import { processHeaders } from "./helpers/header";
import { transformRequest, transformResponse } from "./helpers/data";

const defaults: AxiosRequestConfig = {
  method: "get",
  timeout: 0,
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
    },
  },
  transformRequest: [
    function (data, headers) {
      processHeaders(headers, data);
      return transformRequest(data);
    },
  ],
  transformResponse: [
    function (data) {
      return transformResponse(data);
    },
  ],
};

const methodsNoData = ["delete", "get", "head", "options"];
methodsNoData.forEach((method) => {
  defaults.headers[method] = {};
});

const methodWithData = ["post", "put", "patch"];
methodWithData.forEach((method) => {
  defaults.headers[method] = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
});
export default defaults;
