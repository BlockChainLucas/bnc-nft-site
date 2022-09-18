import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setUserMsg,
  setShowLoginoutModal,
} from "../../../../store/actions/user";
import icon_guanbi from "../../../../assets/modal/icon_guanbi.png";
import icon_MrtaMask from "../../../../assets/modal/icon_MrtaMask.png";

import "./modal.scss";
import { getUserInfo } from "../../../../api/user";
const Modal: React.FC = () => {
  const dispatch = useDispatch();
  const getUserinfoFun = () => {
    getUserInfo({ id: 1 }).then((res: any) => {
      dispatch(
        setUserMsg({
          username: "captern",
          key: "asdcnkcnksancknsakjcnkjsdnckjsnajkn",
        })
      );
      hideModal();
    });
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
        <div className="modal-main">
          <img className="avatar" src={icon_MrtaMask} alt="" />
          <div className="username">MrtaMask</div>
          <div className="desc" onClick={getUserinfoFun}>
            Connect to your MetaMask Waller
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
