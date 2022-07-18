/*
 * @Descripttion:
 * @version:
 * @Author: captern@icloud.com
 * @Date: 2022-07-11 16:40:14
 * @LastEditors: captern
 * @LastEditTime: 2022-07-13 17:40:00
 */
import { AxiosInstance, AxiosRequestConfig } from "./types";
import { extend } from "./helpers/utils";
import Axios from "./core/Axios";
import defaults from "./defaults";
function createInstance(config: AxiosRequestConfig): AxiosInstance {
  const context = new Axios(config);
  const instance = Axios.prototype.request.bind(context);
  extend(instance, context);
  return instance as AxiosInstance;
}
const axios = createInstance(defaults);
export default axios;
