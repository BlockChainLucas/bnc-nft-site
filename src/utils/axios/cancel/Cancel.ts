/*
 * @Descripttion:
 * @version:
 * @Author: captern@icloud.com
 * @Date: 2022-07-27 14:08:19
 * @LastEditors: captern
 * @LastEditTime: 2022-07-27 14:52:08
 */
export default class Cancel {
  message?: string;
  constructor(message?: string) {
    this.message = message;
  }
}

export function isCancel(value: any): boolean {
  return value instanceof Cancel;
}
