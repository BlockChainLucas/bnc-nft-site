/*
 * @Descripttion:
 * @version:
 * @Author: captern@icloud.com
 * @Date: 2022-07-11 17:28:11
 * @LastEditors: captern
 * @LastEditTime: 2022-07-27 15:08:10
 */
import xhr from "./xhr";
import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from "../types";
import { buildURL } from "../helpers/url";
import { transformRequest, transformResponse } from "../helpers/data";
import { flattenHeaders, processHeaders } from "../helpers/header";
import transform from "./transform";
export default function dispatchRequest(
  config: AxiosRequestConfig
): AxiosPromise {
  throwIfCancellationRequested(config);
  processConfig(config);
  return xhr(config).then((res) => {
    return transformResponseData(res);
  });
}

const processConfig = (config: AxiosRequestConfig): void => {
  config.url = transformURL(config);
  // config.headers = transformHeader(config);
  // config.data = transformRequestDate(config);
  config.data = transform(config.data, config.headers, config.transformRequest);
  config.headers = flattenHeaders(config.headers, config.method!);
};

const transformURL = (config: AxiosRequestConfig): string => {
  const { url, params } = config;
  return buildURL(url!, params);
};

// const transformRequestDate = (config: AxiosRequestConfig): any => {
//   return transformRequest(config.data);
// };
// const transformHeader = (config: AxiosRequestConfig): any => {
//   const { headers = {}, data } = config;
//   return processHeaders(headers, data);
// };

const transformResponseData = (res: AxiosResponse): AxiosResponse => {
  // res.data = transformResponse(res.data);
  res.data = transform(res.data, res.headers, res.config.transformResponse);
  return res;
};

const throwIfCancellationRequested = (config: AxiosRequestConfig): void => {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
};
