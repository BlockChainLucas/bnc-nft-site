/*
 * @Descripttion:
 * @version:
 * @Author: captern@icloud.com
 * @Date: 2022-07-11 10:13:42
 * @LastEditors: captern
 * @LastEditTime: 2022-07-26 17:57:35
 */
import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from "../types";
import { parseHeaders } from "../helpers/header";
import { createError } from "../helpers/error";
export default function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise((resolve, reject) => {
    const {
      url,
      method = "get",
      data = null,
      headers,
      responseType,
      timeout,
      cancelToken,
    } = config;
    const request = new XMLHttpRequest();
    if (responseType) {
      request.responseType = responseType;
    }
    if (timeout) {
      request.timeout = timeout;
    }
    request.open(method, url!, true);
    // 成功回调
    request.onreadystatechange = () => {
      if (request.readyState !== 4) {
        return;
      }
      // 数据状态码处理
      if (request.status === 0) {
        return;
      }
      const responseHeaders = parseHeaders(request.getAllResponseHeaders());
      const responseData =
        responseType !== "text" ? request.response : request.responseText;
      const response: AxiosResponse = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request,
      };
      handleResponse(response);
    };
    // 失败处理
    request.onerror = () => {
      reject(createError("Network Error", config, null, request));
    };
    // 超时
    request.ontimeout = () => {
      reject(
        createError(
          `Timeout of ${timeout} ms exceeded`,
          config,
          "ECONNABORTED",
          request
        )
      );
    };
    Object.keys(headers).forEach((name: string) => {
      if (data === null && name.toLowerCase() === "content-type") {
        delete headers[name];
      } else {
        console.log("name", name);
        console.log("headers[name]", headers[name]);
        request.setRequestHeader(name, headers[name]);
      }
    });

    if (cancelToken) {
      cancelToken.promise.then((reason) => {
        request.abort();
        reject(reason);
      });
    }
    request.send(data);

    const handleResponse = (response: AxiosResponse): void => {
      if (response.status >= 200 && response.status < 300) {
        resolve(response);
      } else {
        reject(
          createError(response.statusText, config, null, request, response)
        );
      }
    };
  });
}
