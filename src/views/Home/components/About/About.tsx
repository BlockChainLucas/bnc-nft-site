import React from "react";
import about_bg from "../../../../assets/about/about_bg.png";
import about_biaoti from "../../../../assets/about/about_biaoti.png";
import "./about.scss";
const About: React.FC = () => {
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
          <div className="desc">
            Blockchain Nuggets Community is a learning plus entrepreneurial
            community with blockchain education as the entrance, the community
            was founded in 2022, the founder of the community is a DAO
            organization jointly initiated by Defi/Gamefi/Nft and other early
            players of the track, we have helped nearly 1000+ students to get
            early industry dividends through a large number of courses +
            practical training + cutting-edge We have helped nearly 1000+
            students to get the early dividends of the industry through a large
            number of courses + practical training + cutting-edge track
            foresight, and the community has done multiple industrialized
            layouts in WEB3 core track through the organization of DAO. The most
            influential DAO organization
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
