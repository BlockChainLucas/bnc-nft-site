/*
 * @Descripttion:
 * @version:
 * @Author: captern@icloud.com
 * @Date: 2022-07-11 16:31:34
 * @LastEditors: captern
 * @LastEditTime: 2022-07-11 16:35:59
 */
import { AxiosRequestConfig, AxiosResponse } from "../types";
class AxiosError extends Error {
  isAxiosError: boolean;
  config: AxiosRequestConfig;
  code?: string | null;
  request?: any;
  response?: AxiosResponse;
  constructor(
    message: string,
    config: AxiosRequestConfig,
    code?: string | null,
    request?: any,
    response?: AxiosResponse
  ) {
    super(message);
    this.config = config;
    this.code = code;
    this.request = request;
    this.response = response;
    this.isAxiosError = true;
    // 继承内置对象的 解决方案
    // Object.setPrototypeOf(this, AxiosError.prototype);
  }
}

export const createError = (
  message: string,
  config: AxiosRequestConfig,
  code?: string | null,
  request?: any,
  response?: AxiosResponse
) => {
  const error = new AxiosError(message, config, code, request, response);
  return error;
};
