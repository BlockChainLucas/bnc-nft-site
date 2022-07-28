/*
 * @Descripttion:
 * @version:
 * @Author: captern@icloud.com
 * @Date: 2022-07-11 13:46:42
 * @LastEditors: captern
 * @LastEditTime: 2022-07-27 16:38:01
 */
const toString = Object.prototype.toString;
export const isDate = (val: any): val is Date => {
  return toString.call(val) === "[object Date]";
};

// export const isObject = (val: any): val is Object => {
//   return val !== null && typeof val === "object";
// };

export function isObject(val: any): val is Object {
  return val !== null && typeof val === "object";
}
// 判断是否为普通对象
export const isPlainObject = (val: any): val is Object => {
  return toString.call(val) === "[object Object]";
};
// 混合对象
export function extend<T, U>(to: T, from: U): T & U {
  for (const key in from) {
    (to as T & U)[key] = from[key] as any;
  }
  return to as T & U;
}

export function isFormData(val: any): val is FormData {
  return typeof val !== "undefined" && val instanceof FormData;
}

export function deepMerge(...objs: any[]): any {
  const result = Object.create(null);
  objs.forEach((obj) => {
    if (obj) {
      Object.keys(obj).forEach((key) => {
        const val = obj[key];
        if (isPlainObject(val)) {
          if (isPlainObject(result[key])) {
            result[key] = deepMerge(result[key], val);
          } else {
            result[key] = deepMerge(val);
          }
        } else {
          result[key] = val;
        }
      });
    }
  });
  return result;
}
