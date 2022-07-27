/*
 * @Descripttion:
 * @version:
 * @Author: captern@icloud.com
 * @Date: 2022-07-26 17:51:25
 * @LastEditors: captern
 * @LastEditTime: 2022-07-27 14:58:18
 */
import { Canceler, CancelExecutor, CancelTokenSource } from "../types";
import Cancel from "./Cancel";

interface ResolvePromise {
  (reason: Cancel): void;
}

export default class CancelToken {
  promise: Promise<Cancel>;
  reason?: Cancel;
  constructor(executor: CancelExecutor) {
    let resolvePromise: ResolvePromise;
    this.promise = new Promise<Cancel>((resolve) => {
      resolvePromise = resolve;
    });
    executor((message) => {
      if (this.reason) {
        return;
      }
      this.reason = new Cancel(message);
      resolvePromise(this.reason);
    });
  }

  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }
  static source(): CancelTokenSource {
    let cancel!: Canceler;
    const token = new CancelToken((c) => {
      cancel = c;
    });
    return {
      cancel,
      token,
    };
  }
}
