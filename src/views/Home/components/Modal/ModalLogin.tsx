/*
 * @Descripttion:
 * @version:
 * @Author: captern@icloud.com
 * @Date: 2022-09-25 20:12:35
 * @LastEditors: captern
 * @LastEditTime: 2022-09-26 13:34:50
 */
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setUserMsg,
  setShowLoginoutModal,
} from "../../../../store/actions/user";
import { message, Spin } from "antd";
import icon_guanbi from "@assets/modal/icon_guanbi.png";
import icon_MrtaMask from "@assets/modal/icon_MrtaMask.png";
import "./modal.scss";
import { getUserInfo } from "../../../../api/user";
import { ethers } from "ethers";

const Modal: React.FC = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const getUserinfoFun = async () => {
    let provider: any = null;
    setLoading(true);
    if (window.ethereum) {
      provider = new ethers.providers.Web3Provider(
        window.ethereum as ethers.providers.ExternalProvider
      );
      await provider.send("eth_requestAccounts", []);
    } else {
      message.error("Please download metamask.");
    }

    dispatch(
      setUserMsg({
        key: provider?.provider?.selectedAddress,
        provider: provider,
      })
    );
    setTimeout(() => {
      setLoading(false);
      hideModal();
    }, 500);
    // getUserInfo({ id: 1 }).then((res: any) => {

    //   hideModal();
    // });
  };

  const hideModal = () => {
    dispatch(setShowLoginoutModal(null));
  };

  return (
    <div className="modal-container">
      <div className="modal-bkg" />
      <div className="modal-area">
        <img
          className="close-icon"
          src={icon_guanbi}
          alt=""
          onClick={hideModal}
        />
        <div className="modal-title">Connect a wallet</div>
        <Spin spinning={loading}>
          <div className="modal-main" onClick={getUserinfoFun}>
            <img className="avatar" src={icon_MrtaMask} alt="" />
            <div className="username">Metamask</div>
            <div className="desc">Connect to your MetaMask Wallet.</div>
          </div>
        </Spin>
      </div>
    </div>
  );
};
export default Modal;
