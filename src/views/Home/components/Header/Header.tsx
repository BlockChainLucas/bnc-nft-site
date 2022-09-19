import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Anchor } from "antd";
import "./header.scss";
import logo from "@assets/modal/logo.png";
import { setShowLoginoutModal } from "../../../../store/actions/user";
const { Link } = Anchor;
const Header: React.FC = (props: any) => {
  const userMsg = useSelector((state: any) => state.user);
  const [key, setKey] = useState(null);
  useEffect(() => {
    if (userMsg?.key && userMsg.key?.length) {
      const replace = userMsg.key.slice(6, userMsg.key.length - 6);
      setKey(userMsg.key?.replace(replace, "..."));
    }
  }, [userMsg]);
  const dispatch = useDispatch();
  return (
    <div className="header-container">
      <div className="header-main">
        <div className="header-left">
          <img className="logo" src={logo} alt="" />
          BNC NFT
        </div>
        <div className="header-center">
          <Anchor>
            <Link href="#about" title="About BNC" />
            <Link href="#roadmap" title="Roadmap" />
            <Link href="#mint" title="Free Mint" />
            <Link href="#buy" title="How To Mint" />
            <Link href="#faqs" title="FAQS" />
          </Anchor>
        </div>
        <div className="header-right-area">
          {userMsg?.key ? (
            <div
              className="header-right login"
              onClick={() => dispatch(setShowLoginoutModal("logout"))}
            >
              {key}
            </div>
          ) : (
            <div
              className="header-right unlogin"
              onClick={() => dispatch(setShowLoginoutModal("login"))}
            >
              Connect Wallet
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
