import React, { useState } from "react";
import faqs_bg from "@assets/faqs/faqs_bg.png";
import faqs_biaoqian from "@assets/faqs/faqs_biaoqian.png";
import icon_up from "@assets/faqs/up.png";
import icon_down from "@assets/faqs/down.png";
import "./faqs.scss";
const faqsList = [
  {
    key: "01",
    title: "How to get NFT",
    desc: "Join the BNC community and participate in sharing",
  },
  {
    key: "02",
    title: "How do I stay safe",
    desc: "woo, this is a very smart question with an unchanging answer: NO ONE from the core team will ever DM you! Stay vigilant and be on the alert for scammers. If you come across one, flag and report them to mods immediately!",
  },
  {
    key: "03",
    title: "Can I mint mre than 1 NFT",
    desc: "In principle, No but you can join us as a community volunteer or become a community partner",
  },
  {
    key: "04",
    title: "Can I resell NFT",
    desc: "Sorry, resale is not available at the moment, we will open resale in one of the quarters of 2023",
  },
];
const FAQS: React.FC = () => {
  const [checkFaq, setCheckFaq] = useState("");
  return (
    <div id="faqs" className="faqs-container">
      <div className="container">
        <div className="container-bkg">
          <img src={faqs_bg} alt="" />
        </div>
        <div className="container-main">
          <div className="title">
            <img className="biaoti" src={faqs_biaoqian} alt="" />
          </div>
          <div className="desc">
            {faqsList.map((item) => {
              return (
                <div className="item" key={item.key}>
                  <div className="title-area">
                    <div className="item-key">{item.key}</div>
                    <div className="item-title">{item.title}</div>
                    <div
                      className="item-icon"
                      onClick={() => {
                        if (item.key === checkFaq) {
                          setCheckFaq("");
                        } else {
                          setCheckFaq(item.key);
                        }
                      }}
                    >
                      {checkFaq === item.key ? (
                        <img src={icon_up} alt="" />
                      ) : (
                        <img src={icon_down} alt="" />
                      )}
                    </div>
                  </div>
                  {checkFaq === item.key && (
                    <div className="item-desc">{item.desc}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default FAQS;
