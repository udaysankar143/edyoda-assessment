import React, { useState } from "react";
import "./subscription.css";
import { subscriptiontypes } from "../data";
import statusicon from "../icons/statusgood.png";
import { FaRegClock } from "react-icons/fa";
import payimg from "../icons/razorpay.png";

const Subscription = () => {
  const [selectedsub, setSelectedsub] = useState({
    fees: 0,
    caption: "",
    title: "",
    total: 0,
    permonth: 0,
  });
  const [optClicked, setOptionClicked] = useState(false);
  const proceedbtn = () => {
    alert(
      "Done. successfully created payment page with components of reactjs."
    );
  };
  return (
    <div className="subs">
      <div className="useroptions">
        <span>
          <h1>1</h1>
          <p>Sign Up</p>
        </span>
        <span>
          <h1>2</h1>
          <p>Subscribe</p>
        </span>
      </div>
      <h1 className="heading">Select your subscription plan</h1>
      {subscriptiontypes.map((item, i) => (
        <button
          onClick={() => {
            setOptionClicked(item.permonth);
            setSelectedsub(item);
          }}
          disabled={item.caption === "offer expired"}
          key={i}
          className={`${
            item.caption === "offer expired"
              ? "subscription_option disabled"
              : optClicked === item.permonth
              ? "subscription_option active"
              : "subscription_option"
          }`}>
          <span>
            {optClicked === item.permonth ? (
              <div>
                <img src={statusicon} alt="pic" className="statusicon" />
              </div>
            ) : (
              <div className="checkbox"></div>
            )}
            <p
              className={`${
                item.caption === "offer expired" ? "title disabled" : "title"
              }`}>
              {item.title}
            </p>
          </span>
          <span className="total">
            <p>
              Total
              <h1
                className={`${
                  item.caption === "offer expired"
                    ? "title titledisabled"
                    : "title"
                }`}>{` ₹${item.total}`}</h1>
            </p>
            <p>
              <h2>{`₹${item.permonth}  `}</h2>/month
            </p>
          </span>
          {item.caption && (
            <div
              className={`${
                item.caption === "recommanded"
                  ? "caption success"
                  : "caption danger"
              }`}>
              {item.caption}
            </div>
          )}
        </button>
      ))}
      {optClicked === selectedsub.permonth && (
        <div className="optioned">
          <span className="fee">
            <p>Subscription Fee</p>
            <p>₹18,500</p>
          </span>
          <div className="offerzone">
            <div className="offer">
              <span>
                <h1>Limited time offer</h1>
                <p>-₹{selectedsub.fees - selectedsub.total}</p>
              </span>
              <div className="alerthead">
                <FaRegClock size={18} className="clockicon" />
                <p>Offer valid till 15 June 2023</p>
              </div>
            </div>
          </div>
          <span className="amount">
            <h1>
              Total<p>{"(incl. of 18% GST)"}</p>
            </h1>
            <h1>₹{selectedsub.total}</h1>
          </span>
          <div className="buttons">
            <button onClick={() => setOptionClicked(false)} className="cancel">
              CANCEL
            </button>
            <button onClick={proceedbtn} className="proceed">
              PROCEED TO PAY
            </button>
          </div>
          <div>
            <img src={payimg} alt="pic" className="payimg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Subscription;
