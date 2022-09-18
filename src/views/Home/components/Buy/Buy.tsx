import React, { useState } from "react";
import howto_bg from "../../../../assets/howto/howto_bg.png";
import howto_biaoqian from "../../../../assets/howto/howto_biaoqian.png";
import "./buy.scss";

const Buy: React.FC = () => {
  const [check, setCheck] = useState("pass");
  const [walletAddress, setWalletAddress] = useState(null);
  const [showError, setShowError] = useState(false);
  const MintNow = () => {
    walletAddress ? setShowError(false) : setShowError(true);
  };
  return (
    <div id="buy" className="buy-container">
      <div className="container">
        <div className="container-bkg">
          <img src={howto_bg} alt="" />
        </div>
        <div className="container-main">
          <div className="title">
            <img className="biaoti" src={howto_biaoqian} alt="" />
          </div>
          <div className="desc">
            <div className="desc-main"></div>
            <div className="desc-footer">
              Once you have made your purchase, your BNC commnity NFT will
              appear in your metamask wallet! <br />
              Message us on Discord if you have any issues.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Buy;
