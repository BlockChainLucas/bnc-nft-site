import {
  SET_USER_MSG,
  SET_SHOW_LOGINOUT_MODAL,
  SET_USER_LOUOUT,
} from "../types/user";

export const setUserMsg = (data: any) => {
  return {
    type: SET_USER_MSG,
    data,
  };
};

export const setUserLogout = () => {
  return {
    type: SET_USER_LOUOUT,
  };
};
export const setShowLoginoutModal = (data: null | "login" | "logout") => {
  return {
    type: SET_SHOW_LOGINOUT_MODAL,
    data,
  };
};
