import React, { useEffect, useState } from "react";
import mint_bg from "@assets/mint/mint_bg.png";
import mint_biaoti from "@assets/mint/mint_biaoti.png";
import "./mint.scss";
import { ethers, Signer } from "ethers";
import { abi } from "./contractAbi";
import { Button, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setUserMsg } from "../../../../store/actions/user";

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
const contractAddress = "0x47b94CFAEc2c728866793a452ADD9270ebedE2B2";

const Roadmap: React.FC = () => {
  const [type, setType] = useState(0);
  const [showError, setShowError] = useState(true);
  const [mintMount, setMintMount] = useState(0);
  const [mintType, setMintType] = useState('Mint Now');
  const [isLoading, setIsLoading] = useState(true);
  const userMsg = useSelector((state: any) => state.user);
  const address = userMsg.key;
  const [showSwitchError, setShowSwitchError] = useState(false);
  let provider = userMsg?.provider;
  const signer = provider?.getSigner();
  const dispatch = useDispatch();
  const contract = new ethers.Contract(
    contractAddress,
    abi,
    provider as ethers.providers.Provider
  );
  //判断网络是否正确
  const isTrueNetwork = async ()=>{
    const chainId = userMsg?.provider?.network?.chainId;
    if(chainId!=5){
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x5' }],
      }).then(()=>setShowSwitchError(false)).catch(()=>setShowSwitchError(true));    
    }
  }
  isTrueNetwork();
  //监听账号切换
  window?.ethereum?.on("accountsChanged", async () => {
    provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    dispatch(
      setUserMsg({
        key: provider?.provider?.selectedAddress,
        provider: provider,
      })
    );
  });
  //监听网络切换
  window?.ethereum?.on("chainChanged", async (chainId:number) => {
    if (chainId!==5) {
      setShowSwitchError(true);
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x5' }],
      }).then(()=>setShowSwitchError(false)).catch(()=>setShowSwitchError(true));
    }
    else{
      setShowSwitchError(false);
    }
  });

  const MintNow = async () => {
    isWhiteList(mintList[type]);
    const contractWithSigner = contract.connect(signer as Signer);
    const nfts = await getMintTypeAndResults();
    if (nfts.length === 0) {
      const tx = await contractWithSigner.mintWhitelist(type)
      setIsLoading(true);
      await tx.wait();
      setIsLoading(false);
    } else {
      const tx = await contractWithSigner
        .upgrade(type, nfts[nfts.length - 1][0]._hex)
        setIsLoading(true);
        await tx.wait()
        setIsLoading(false);
    }
  };
  const getMintTypeAndResults = async()=>{
    let hasLowerNft = null;
    let nfts = [];
    for (let i = 0; i < type; i++) {
      hasLowerNft = await contract
        .walletOfOwner(i, address)
        .catch((err: any) => {});
      if (hasLowerNft !== undefined && hasLowerNft[0]._hex !== "0x00") {
        nfts.push(hasLowerNft);
      }
    }
    return nfts;
  }
  const isWhiteList = async (item: any) => {
    setType(item.type);
    setIsLoading(false);
    try {
      const isInWhiteList = await contract.checkWhitelist(item.type, address);
      setMintMount(isInWhiteList ? 1 : 0);
      setShowError(!isInWhiteList);
      if(isInWhiteList){
        const results = await getMintTypeAndResults();
        if(results.length===0){
          setMintType('Mint Now');
        }
        else{
          setMintType('Upgrade Now')
        }
      }
    } catch (e) {
      setShowError(true);
    }
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
                      type === item.type
                        ? "mint-item mint-item-check"
                        : "mint-item"
                    }
                    key={item.key}
                  >
                    <div
                      className="mint-item-img"
                      onClick={() => isWhiteList(item)}
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
                <Button
                  className="mint-button"
                  onClick={MintNow}
                  disabled={showError || showSwitchError}
                  loading={isLoading}
                >
                  {mintType}
                </Button>
                {showError && (
                  <div className="error">Wallet Address not whitelisted!</div>
                )}
                {showSwitchError && (
                  <div className="error">please switch to goerli chain!</div>
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
