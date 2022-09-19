import React, { useState } from "react";
import howto_bg from "@assets/howto/howto_bg.png";
import howto_biaoqian from "@assets/howto/howto_biaoqian.png";
import "./buy.scss";

const Buy: React.FC = () => {
  const buyList = [
    {
      key: "01",
      desc: "Download the metamask.io extension on your browser.",
    },
    {
      key: "02",
      desc: "Purchase have a little ETH on your metamask wallet to pay gas fee",
    },
    {
      key: "03",
      desc: "Click “MINT” button, Metamask will popup asking for connection. Confirm the transaction and any associated fees.",
    },
  ];
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
            <div className="desc-main">
              <div>
                {buyList.map((item) => {
                  return (
                    <div className="desc-item" key={item.key}>
                      <div className="desc-item-num">{item.key}</div>
                      <div className="desc-item-text">{item.desc}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="desc-footer">
              Once you have made your purchase, your BNC commnity NFT will
              appear in your metamask wallet!
              <br />
              Message us on Discord if you have any issues.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Buy;
