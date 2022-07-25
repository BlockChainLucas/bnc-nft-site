import { AxiosTransformer } from "../types";

/*
 * @Descripttion:
 * @version:
 * @Author: captern@icloud.com
 * @Date: 2022-07-25 16:33:35
 * @LastEditors: captern
 * @LastEditTime: 2022-07-25 16:35:14
 */
export default function transform(
  data: any,
  headers: any,
  fns?: AxiosTransformer | AxiosTransformer[]
): any {
  if (!fns) {
    return data;
  }
  if (!Array.isArray(fns)) {
    fns = [fns];
  }
  fns.forEach((fn) => {
    data = fn(data, headers);
  });
  return data;
}
