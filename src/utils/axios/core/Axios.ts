/*
 * @Descripttion:
 * @version:
 * @Author: captern@icloud.com
 * @Date: 2022-07-11 17:20:11
 * @LastEditors: captern
 * @LastEditTime: 2022-07-13 19:16:51
 */
import {
  AxiosPromise,
  AxiosRequestConfig,
  Method,
  AxiosResponse,
  ResolvedFn,
  RejectedFn,
} from "../types";
import dispatchRequest from "./dispatchRequest";
import AxiosInterceptorManager from "./interceptorManager";
import mergeConfig from "./mergeConfig";
interface Interceptors {
  request: AxiosInterceptorManager<AxiosRequestConfig>;
  response: AxiosInterceptorManager<AxiosResponse>;
}
interface PromiseChain<T> {
  resolved: ResolvedFn<T> | ((config: AxiosRequestConfig) => AxiosPromise<T>);
  rejected?: RejectedFn;
}
export default class Axios {
  // request(config: AxiosRequestConfig): AxiosPromise {
  //   return dispatchRequest(config);
  // }
  defaults: AxiosRequestConfig;
  interceptors: Interceptors;
  constructor(initConfig: AxiosRequestConfig) {
    this.defaults = initConfig;
    // 初始化拦截器实例
    this.interceptors = {
      request: new AxiosInterceptorManager<AxiosRequestConfig>(),
      response: new AxiosInterceptorManager<AxiosResponse>(),
    };
  }
  request(url?: any, config?: any): AxiosPromise {
    // return dispatchRequest(config);
    if (typeof url === "string") {
      if (!config) {
        config = {};
      }
      config.url = url;
    } else {
      config = url;
    }

    // merge 请求头
    config = mergeConfig(this.defaults, config);
    config.method = config.method.toLowerCase();
    // 链式调用
    const chain: PromiseChain<any>[] = [
      {
        resolved: dispatchRequest,
        rejected: undefined,
      },
    ];
    // 添加拦截器链
    this.interceptors.request.forEach((interceptor) => {
      chain.unshift(interceptor); // 后添加的先执行
    });
    this.interceptors.response.forEach((interceptor) => {
      chain.push(interceptor);
    });
    let promise = Promise.resolve(config);
    while (chain.length) {
      const { resolved, rejected } = chain.shift()!;
      promise = promise.then(resolved, rejected);
    }

    // return dispatchRequest(config);
    return promise;
  }

  get(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithoutData("get", url, config);
  }
  delete(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithoutData("delete", url, config);
  }

  head(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithoutData("head", url, config);
  }
  options(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithoutData("options", url, config);
  }
  post(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithData("post", url, data, config);
  }
  put(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithData("put", url, data, config);
  }
  patch(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithData("patch", url, data, config);
  }

  _requestMethodWithoutData(
    method: Method,
    url: string,
    config?: AxiosRequestConfig
  ) {
    return this.request(
      Object.assign(config || {}, {
        method,
        url,
      })
    );
  }
  _requestMethodWithData(
    method: Method,
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ) {
    return this.request(
      Object.assign(config || {}, {
        method,
        url,
        data,
      })
    );
  }
}
