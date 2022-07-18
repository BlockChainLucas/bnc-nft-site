/*
 * @Descripttion:
 * @version:
 * @Author: captern@icloud.com
 * @Date: 2022-07-11 18:27:27
 * @LastEditors: captern
 * @LastEditTime: 2022-07-11 18:36:34
 */
import { ResolvedFn, RejectedFn } from "../types";
interface Interceptor<T> {
  resolved: ResolvedFn<T>;
  rejected?: RejectedFn;
}
export default class InterceptorManager<T> {
  private interceptors: Array<Interceptor<T> | null>; // 存储拦截器
  constructor() {
    this.interceptors = [];
  }
  use(resolved: ResolvedFn<T>, rejected?: RejectedFn): number {
    // 添加拦截器
    this.interceptors.push({
      resolved,
      rejected,
    });
    return this.interceptors.length - 1;
  }
  // 提供拦截器访问
  forEach(fn: (interceptor: Interceptor<T>) => void): void {
    this.interceptors.forEach((interceptor) => {
      if (interceptor !== null) {
        fn(interceptor);
      }
    });
  }
  eject(id: number): void {
    // 删除拦截器
    if (this.interceptors[id]) {
      // 直接删除会改变长度 导致 id 混乱
      // this.interceptors.splice(id, 1);
      this.interceptors[id] = null;
    }
  }
}
