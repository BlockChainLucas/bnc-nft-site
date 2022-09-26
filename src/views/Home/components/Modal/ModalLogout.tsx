/*
 * @Descripttion:
 * @version:
 * @Author: captern@icloud.com
 * @Date: 2022-09-19 11:54:44
 * @LastEditors: captern
 * @LastEditTime: 2022-09-26 13:38:42
 */
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { CopyToClipboard } from "react-copy-to-clipboard";
import copy from "copy-to-clipboard";
import {
  setUserLogout,
  setShowLoginoutModal,
} from "../../../../store/actions/user";
import icon_guanbi from "@assets/modal/icon_guanbi.png";
import icon_MrtaMask from "@assets/modal/icon_MrtaMask.png";
import icon_fuzhi from "@assets/modal/icon_fuzhi.png";

import "./logout.scss";
import { getUserInfo } from "../../../../api/user";
import { message, Spin } from "antd";
const Modal: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const userMsg = useSelector((state: any) => state.user);
  const logout = () => {
    setLoading(true);
    // getUserInfo({ id: 1 }).then((res: any) => {
    //   dispatch(setUserLogout());
    //   hideModal();
    // });
    dispatch(setUserLogout());
    setTimeout(() => {
      setLoading(false);
    }, 300);
  };

  const hideModal = () => {
    dispatch(setShowLoginoutModal(null));
  };

  return (
    <div className="modal-container-logout">
      <div className="modal-bkg" />
      <div className="modal-area">
        <img
          className="close-icon"
          src={icon_guanbi}
          alt=""
          onClick={hideModal}
        />
        <div className="modal-title">Your wallet</div>
        <div className="modal-main">
          <div className="avatar-area">
            <img className="avatar" src={icon_MrtaMask} alt="" />
          </div>
          <div className="msg-area">
            <div className="username">MrtaMask</div>
            <div className="desc">{userMsg.key}</div>
          </div>
          <div className="copy-area">
            <img
              src={icon_fuzhi}
              alt=""
              onClick={() => {
                copy(userMsg.key);
                message.success("Copy success");
              }}
            />
          </div>
        </div>
        <div className="modal-bottom">
          <div className="io-link">view on etherscan.io</div>
          <Spin spinning={loading}>
            <div className="logout" onClick={logout}>
              Log out
            </div>
          </Spin>
        </div>
      </div>
    </div>
  );
};
export default Modal;
