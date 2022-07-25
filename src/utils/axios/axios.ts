/*
 * @Descripttion:
 * @version:
 * @Author: captern@icloud.com
 * @Date: 2022-07-11 16:40:14
 * @LastEditors: captern
 * @LastEditTime: 2022-07-25 17:43:07
 */
import { AxiosRequestConfig, AxiosStatic } from "./types";
import { extend } from "./helpers/utils";
import Axios from "./core/Axios";
import defaults from "./defaults";
import mergeConfig from "./core/mergeConfig";
// function createInstance(config: AxiosRequestConfig): AxiosInstance {
function createInstance(config: AxiosRequestConfig): AxiosStatic {
  const context = new Axios(config);
  const instance = Axios.prototype.request.bind(context);
  extend(instance, context);
  return instance as AxiosStatic;
}
const axios = createInstance(defaults);

axios.create = function create(config) {
  return createInstance(mergeConfig(defaults, config));
};
export default axios;
