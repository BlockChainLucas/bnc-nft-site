import React from "react";
import "./footer.scss";
import icon_discord from "@assets/footer/icon_discord.png";
import icon_twitter from "@assets/footer/icon_twitter.png";
const FAQS: React.FC = () => {
  return (
    <div className="footer-container">
      <div className="links">
        <div className="link-item">
          <img src={icon_discord} alt="" />
          <span>Discord</span>
        </div>
        <div className="link-item">
          <img src={icon_twitter} alt="" />
          <span>Twitter</span>
        </div>
      </div>
    </div>
  );
};
export default FAQS;
