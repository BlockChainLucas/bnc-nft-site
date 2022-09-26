/*
 * @Descripttion:
 * @version:
 * @Author: captern@icloud.com
 * @Date: 2022-09-18 20:33:44
 * @LastEditors: captern
 * @LastEditTime: 2022-09-26 13:38:22
 */
import {
  SET_USER_MSG,
  SET_SHOW_LOGINOUT_MODAL,
  SET_USER_LOUOUT,
} from "../types/user";
const init_state = {
  username: null, // 用户名称
  key: null,
  loginoutModal: null,
};

export default function user(state = init_state, action: any) {
  const { type, data } = action;
  switch (type) {
    case SET_USER_MSG:
      return Object.assign({}, state, data);
    case SET_USER_LOUOUT:
      return {
        username: null, // 用户名称
        key: null,
        // loginoutModal: null,
      };
    case SET_SHOW_LOGINOUT_MODAL:
      return Object.assign({}, state, { loginoutModal: data });
    default:
      return state;
  }
}
