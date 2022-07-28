/*
 * @Descripttion:
 * @version:
 * @Author: captern@icloud.com
 * @Date: 2022-07-11 13:42:45
 * @LastEditors: captern
 * @LastEditTime: 2022-07-28 11:18:12
 */
import { isDate, isPlainObject, isURLSearchParams } from "./utils";
interface URLOrigin {
  protocol: string;
  host: string;
}
const encode = (val: string): string => {
  return encodeURIComponent(val)
    .replace(/%40/g, "@")
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
};
export const buildURL = (
  url: string,
  params?: any,
  paramsSerializer?: (params: any) => string
): string => {
  if (!params) {
    return url;
  }
  let serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    const parts: string[] = [];
    Object.keys(params).forEach((key) => {
      const val = params[key];
      if (val === null || typeof val === "undefined") {
        return;
      }
      let values = [];
      if (Array.isArray(val)) {
        values = val;
        key += "[]";
      } else {
        values = [val];
      }
      values.forEach((val) => {
        if (isDate(val)) {
          val = val.toISOString();
        } else if (isPlainObject(val)) {
          val = JSON.stringify(val);
        }
        parts.push(`${encode(key)}=${encode(val)}`);
      });
    });
    serializedParams = parts.join("&");
  }

  if (serializedParams) {
    const marIndex = url.indexOf("#");
    if (marIndex !== -1) {
      url = url.slice(0, marIndex);
    }
    url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url;
};

export function isURLSameOrigin(requestURL: string): boolean {
  const parsedOrigin = resolveURL(requestURL);
  return (
    parsedOrigin.protocol === currentOrigin.protocol &&
    parsedOrigin.host === currentOrigin.host
  );
}

const urlParsingNode = document.createElement("a");
const currentOrigin = resolveURL(window.location.href);

function resolveURL(url: string): URLOrigin {
  urlParsingNode.setAttribute("href", url);
  const { protocol, host } = urlParsingNode;
  return {
    protocol,
    host,
  };
}
