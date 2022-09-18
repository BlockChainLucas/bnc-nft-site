import React from "react";
import roadmap_bg from "../../../../assets/roadmap/roadmap_bg.png";
import roadmap_biaoti from "../../../../assets/roadmap/roadmap_biaoti.png";
import "./roadmap.scss";
const dataList = [
  {
    key: "01",
    desc: "Official launch of the Blcokchin Nuggets community in April 2022",
  },
  {
    key: "02",
    desc: "July 2022 Complete first phase of 700+ early core seed community members",
  },
  {
    key: "03",
    desc: "September 2022, issue the community's Genesis NFT, identity binding in preparation for participation in community governance",
  },
  {
    key: "04",
    desc: "By the end of 2022, complete 5000+ core users, issue 4000 Pass NFTs, and 500 Copper NFTs",
  },
  {
    key: "05",
    desc: "Q1 2023, start the first phase of industrialisation, connect to primary market projects and seek resources from primary market (including whitelist, free airdrop tokens)",
  },
  {
    key: "06",
    desc: "Q2 2023, complete 1W+ core users, build back-end team, develop front-end official website and layout community DAO",
  },
  {
    key: "07",
    desc: "Q3 2023, start the second phase of industrialization, look for quality projects to cooperate and try to incubate projects in the primary market",
  },
  {
    key: "08",
    desc: "Q4 2023, complete 10W+ user volume (core users + pan-traffic), start community governance",
  },
  {
    key: "09",
    desc: "Q1 2024, start the third phase of industrialisation, start project operation in the community ( mainly purse and trading projects in the early stage)",
  },
  {
    key: "10",
    desc: "2024 Q2, start community DAO operation, community DAO + project DAO Translated with www.DeepL.com/Translator (free version)",
  },
];
const Roadmap: React.FC = () => {
  return (
    <div id="roadmap" className="roadmap-container">
      <div className="container">
        <div className="container-bkg">
          <img src={roadmap_bg} alt="" />
        </div>
        <div className="container-main">
          <div className="title">
            <img className="biaoti" src={roadmap_biaoti} alt="" />
          </div>
          <div className="desc">
            {dataList?.map((item, index) => {
              return (
                <div key={index} className="desc-item">
                  <div className="item-key">
                    <img
                      src={require(`../../../../assets/roadmap/roadmap_${item.key}.png`)}
                      alt=""
                    />
                  </div>
                  <div className="main">{item.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Roadmap;
