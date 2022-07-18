/*
 * @Descripttion:
 * @version:
 * @Author: captern@icloud.com
 * @Date: 2022-07-13 17:42:11
 * @LastEditors: captern
 * @LastEditTime: 2022-07-13 19:25:50
 */
import { isPlainObject, deepMerge } from "../helpers/utils";
import { AxiosRequestConfig } from "../types";

const stategies = Object.create(null);
// 默认合并策略
function defaultStategy(src: any, tar: any): any {
  return typeof tar !== "undefined" ? tar : src;
}

function fromTarStategy(src: any, tar: any): any {
  if (typeof tar !== "undefined") {
    return tar;
  }
}
function deepMergeStategy(src: any, tar: any): any {
  if (isPlainObject(tar)) {
    return deepMerge(src, tar);
  } else if (typeof tar !== "undefined") {
    return tar;
  } else if (isPlainObject(src)) {
    return deepMerge(src);
  } else if (typeof src !== "undefined") {
    return src;
  }
}
const stategyKeysFromTar = ["url", "params", "data"];
stategyKeysFromTar.forEach((key) => {
  stategies[key] = fromTarStategy;
});
const stategyKeysDeepMerge = ["headers", "auth"];
// "auth", "proxy"
stategyKeysDeepMerge.forEach((key) => {
  stategies[key] = deepMergeStategy;
});

export default function mergeConfig(
  config1: AxiosRequestConfig,
  config2?: AxiosRequestConfig
): AxiosRequestConfig {
  if (!config2) {
    config2 = {};
  }
  const config = Object.create(null);

  function mergeField(key: string): void {
    const stategy = stategies[key] || defaultStategy;
    config[key] = stategy(config1[key], config2![key]);
  }
  for (let key in config2) {
    mergeField(key);
  }
  for (let key in config1) {
    if (!config2[key]) {
      mergeField(key);
    }
  }
  return config;
}
