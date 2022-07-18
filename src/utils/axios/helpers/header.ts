/*
 * @Descripttion:
 * @version:
 * @Author: captern@icloud.com
 * @Date: 2022-07-11 14:47:51
 * @LastEditors: captern
 * @LastEditTime: 2022-07-13 18:53:47
 */
import { deepMerge, isPlainObject } from "./utils";
const normalizeHeaderName = (headers: any, normalizeName: string): void => {
  if (!headers) return;
  Object.keys(headers).forEach((name) => {
    if (
      name !== normalizeName &&
      name.toLocaleUpperCase() === normalizeName.toLocaleUpperCase()
    ) {
      headers[normalizeName] = headers[name];
      delete headers[name];
    }
  });
};
export const processHeaders = (headers: any, data: any): any => {
  normalizeHeaderName(headers, "Content-Type");
  if (isPlainObject(data)) {
    if (headers && !headers["Content-Type"]) {
      headers["Content-Type"] = "application/json;charset=ust-8";
    }
  }
  return headers;
};

export const parseHeaders = (headers: string): any => {
  let parsed = Object.create(null);
  if (!headers) {
    return parsed;
  }
  headers.split("\r\n").forEach((line) => {
    let [key, val] = line.split(":");
    key = key.trim().toLowerCase();
    if (!key) {
      return;
    }
    if (val) {
      val = val.trim();
    }
    parsed[key] = val;
  });
  return parsed;
};

// 提取 header
export const flattenHeaders = (headers: any, method: string): any => {
  if (!headers) {
    return headers;
  }
  headers = deepMerge(headers.common, headers[method], headers);
  const methodsToDelete = [
    "delete",
    "get",
    "head",
    "options",
    "post",
    "put",
    "patch",
    "common",
  ];
  methodsToDelete.forEach((method) => {
    delete headers[method];
  });
  return headers;
};
