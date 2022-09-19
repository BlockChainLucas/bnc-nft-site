import React from "react";
import about_bg from "@assets/about/about_bg.png";
import about_biaoti from "@assets/about/about_biaoti.png";
import "./about.scss";
const About: React.FC = () => {
  const desc =
    "BNC (Blockchain Nuggets Community) community is a learning plus entrepreneurial community with blockchain education as the entrance, the community was founded in 2022, the community founder is a DAO organization jointly initiated by Defi、Gamefi、Nft and other early players of the track, the community through a large number of courses、 practical training、 project The community has helped nearly 1000+ members to get the early dividends of the industry through a lot of courses, practical training, and project research. Meanwhile, the BNC community has done multiple industrialized layouts through the Web3 core track, and the BNC community will lead more than 100,000+ core Dao organization members to realize the upgrade of their life wealth in the future, and eventually make the BNC community the most influential DAO organization community in the global blockchain industry。";
  return (
    <div id="about" className="about-container">
      <div className="container">
        <div className="container-bkg">
          <img src={about_bg} alt="" />
        </div>
        <div className="container-main">
          <div className="title">
            <img className="biaoti" src={about_biaoti} alt="" />
          </div>
          <div className="desc">{desc}</div>
        </div>
      </div>
    </div>
  );
};
export default About;
