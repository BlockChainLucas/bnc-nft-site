/*
 * @Descripttion:
 * @version:
 * @Author: captern@icloud.com
 * @Date: 2022-07-11 17:28:11
 * @LastEditors: captern
 * @LastEditTime: 2022-07-13 19:27:59
 */
import xhr from "./xhr";
import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from "../types";
import { buildURL } from "../helpers/url";
import { transformRequest, transformResponse } from "../helpers/data";
import { flattenHeaders, processHeaders } from "../helpers/header";
export default function dispatchRequest(
  config: AxiosRequestConfig
): AxiosPromise {
  processConfig(config);
  return xhr(config).then((res) => {
    return transformResponseData(res);
  });
}

const processConfig = (config: AxiosRequestConfig): void => {
  config.url = transformURL(config);
  config.headers = transformHeader(config);
  config.data = transformRequestDate(config);
  config.headers = flattenHeaders(config.headers, config.method!);
};

const transformURL = (config: AxiosRequestConfig): string => {
  const { url, params } = config;
  return buildURL(url!, params);
};

const transformRequestDate = (config: AxiosRequestConfig): any => {
  return transformRequest(config.data);
};
const transformHeader = (config: AxiosRequestConfig): any => {
  const { headers = {}, data } = config;
  return processHeaders(headers, data);
};

const transformResponseData = (res: AxiosResponse): AxiosResponse => {
  res.data = transformResponse(res.data);
  return res;
};
