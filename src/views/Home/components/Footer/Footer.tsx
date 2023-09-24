import React from "react";
import "./footer.scss";
import icon_discord from "@assets/footer/icon_discord.png";
import icon_twitter from "@assets/footer/icon_twitter.png";
const FAQS: React.FC = () => {
  return (
    <div className="footer-container">
      <div className="links">
        <div className="link-item">
          <a href="https://discord.gg/ygQNAZyvcK">
            <img src={icon_discord} alt="" />
          </a>
          <span>Discord</span>
        </div>
        <div className="link-item">
          <a href="https://twitter.com/BNC_Web3">
            <img src={icon_twitter} alt="" />
          </a>
          <span>Twitter</span>
        </div>
      </div>
    </div>
  );
};
export default FAQS;
