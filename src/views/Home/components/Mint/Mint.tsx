import React, { useState } from "react";
import mint_bg from "../../../../assets/mint/mint_bg.png";
import mint_biaoti from "../../../../assets/mint/mint_biaoti.png";
import "./mint.scss";

const mintList = [
  {
    key: "pass",
    imgKey: "mint_pass",
    title: "PASS NFT",
  },
  {
    key: "copper",
    imgKey: "mint_copper",
    title: "COPPER NFT",
  },
  {
    key: "silver",
    imgKey: "mint_silver",
    title: "SILVER  NFT",
  },
  {
    key: "gold",
    imgKey: "mint_gold",
    title: "GOLD NFT",
  },
];
const Roadmap: React.FC = () => {
  const [check, setCheck] = useState("pass");
  const [walletAddress, setWalletAddress] = useState(null);
  const [showError, setShowError] = useState(false);
  const MintNow = () => {
    walletAddress ? setShowError(false) : setShowError(true);
  };
  return (
    <div id="mint" className="mint-container">
      <div className="container">
        <div className="container-bkg">
          <img src={mint_bg} alt="" />
        </div>
        <div className="container-main">
          <div className="title">
            <img className="biaoti" src={mint_biaoti} alt="" />
          </div>
          <div className="desc">
            {/* 几个选择项区域 */}
            <div className="mint-list">
              {mintList.map((item) => {
                return (
                  <div
                    className={
                      check === item.key
                        ? "mint-item mint-item-check"
                        : "mint-item"
                    }
                    key={item.key}
                  >
                    <div
                      className="mint-item-img"
                      onClick={() => {
                        setCheck(item.key);
                        setShowError(false);
                      }}
                    >
                      <img
                        src={require(`../../../../assets/mint/${item.imgKey}.png`)}
                        alt=""
                      />
                      <div className="mint-item-title">{item.title}</div>
                    </div>
                    <div className="checked-line" />
                    <div className="check-line" />
                  </div>
                );
              })}
            </div>
            {/* 点击链接区域 */}
            <div className="mint-now">
              <div className="mint-now-left">
                <div className="amount-title">Amount to Mint</div>
                <div className="mint-amount">1</div>
                <div className="mint-button" onClick={MintNow}>
                  Mint Now
                </div>
                {showError && (
                  <div className="error">Wallet Address not whitelisted!</div>
                )}
              </div>
              <div className="mint-now-right">
                <div>max amount to mint： 1</div>
                <div>cost per mint： 0 ETH</div>
                <div>total cost： 0.00ETH</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Roadmap;
