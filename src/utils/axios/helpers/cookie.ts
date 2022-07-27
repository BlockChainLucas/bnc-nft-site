/*
 * @Descripttion:
 * @version:
 * @Author: captern@icloud.com
 * @Date: 2022-07-27 16:13:56
 * @LastEditors: captern
 * @LastEditTime: 2022-07-27 16:17:40
 */
const cookie = {
  read(name: string): string | null {
    const match = document.cookie.match(
      new RegExp(`(^|;\\s*)(${name})=([^;]*)`)
    );
    return match ? decodeURIComponent(match[3]) : null;
  },
};

export default cookie;
