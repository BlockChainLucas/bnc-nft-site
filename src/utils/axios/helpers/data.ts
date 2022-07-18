/*
 * @Descripttion:
 * @version:
 * @Author: captern@icloud.com
 * @Date: 2022-07-11 14:18:21
 * @LastEditors: captern
 * @LastEditTime: 2022-07-11 15:46:25
 */
import { isPlainObject } from "./utils";
export const transformRequest = (data: any): any => {
  if (isPlainObject(data)) {
    return JSON.stringify(data);
  }
  return data;
};

export const transformResponse = (data: any): any => {
  if (typeof data === "string") {
    try {
      data = JSON.parse(data);
    } catch (e) {
      console.error(e);
    }
  }
  return data;
};
