import React, { useState } from "react";
import mint_bg from "@assets/mint/mint_bg.png";
import mint_biaoti from "@assets/mint/mint_biaoti.png";
import "./mint.scss";
import { ethers, Signer } from "ethers";
import { abi } from "./contractAbi";
import { message } from "antd";
import { useSelector } from "react-redux";

const mintList = [
  {
    type: 0,
    key: "pass",
    imgKey: "mint_pass",
    title: "PASS NFT",
  },
  {
    type: 1,
    key: "copper",
    imgKey: "mint_copper",
    title: "COPPER NFT",
  },
  {
    type: 2,
    key: "silver",
    imgKey: "mint_silver",
    title: "SILVER  NFT",
  },
  {
    type: 3,
    key: "gold",
    imgKey: "mint_gold",
    title: "GOLD NFT",
  },
];
const contractAddress="0xaC8A41d1D8b54eb3867ff6843B7164978aeE10e7";

const Roadmap: React.FC = () => {
  const [type, setType] = useState(0);
  const [showError, setShowError] = useState(false);
  const [mintMount,setMintMount] = useState(1);
  const userMsg = useSelector((state: any) => state.user);
  const address = userMsg.key;
  const chainId = userMsg?.provider?.network?.chainId;
  const provider =userMsg?.provider;
  const signer = provider?.getSigner();
  const contract = new ethers.Contract(contractAddress, abi, provider as ethers.providers.Provider);
  const MintNow = async () => {
    isWhiteList(mintList[type]);
    let  hasLowerNft = null;
    const contractWithSigner = contract.connect(signer as Signer);
    let nfts = [];
    for(let i=0;i<type;i++){
       hasLowerNft =  await contract.walletOfOwner(i,address).catch((err:any)=>{
       });
       console.log(hasLowerNft)
       if(hasLowerNft!=undefined&&hasLowerNft[0]._hex!='0x00'){
        nfts.push(hasLowerNft);
       }
    }
    console.log(nfts);
    if(nfts.length==0){
      await contractWithSigner.mintWhitelist(type).catch((err:any)=>{
        message.error(err);
      });
    }
    else{
      await contractWithSigner.upgrade(type,nfts[nfts.length-1][0]._hex).catch((err:any)=>{
        message.error(err);
      });;
    }
  };
  const isWhiteList = async (item:any)=>{
    if(chainId!=5){
      message.error("please switch to goerli chain")
    }
    setType(item.type);
    const isInWhiteList = await contract.checkWhitelist(item.type,address);
    setMintMount(isInWhiteList?1:0);
    setShowError(!isInWhiteList);
  }

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
                      type === item.type
                        ? "mint-item mint-item-check"
                        : "mint-item"
                    }
                    key={item.key}
                  >
                    <div
                      className="mint-item-img"
                      onClick={()=>isWhiteList(item)}
                    >
                      <img
                        src={require(`@assets/mint/${item.imgKey}.png`)}
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
                <div className="mint-amount">{mintMount}</div>
                <div className="mint-button" onClick={MintNow} >
                  Mint Now
                </div>
                {showError && (
                  <div className="error">Wallet Address not whitelisted!</div>
                )}
              </div>
              <div className="mint-now-right">
                <div>max amount to mint： {mintMount}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Roadmap;
