import React from "react";
import "./payment.css";
import { FaRegClock, FaGraduationCap } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import { GiOpenBook } from "react-icons/gi";
import { BiBlock } from "react-icons/bi";
import Subscription from "./subscription";

const Payment = () => {
  return (
    <main className="payment">
      <div className="payment_container">
        <div className="list_container">
          <h1>Access curated courses worth</h1>
          <div>
            <strike className="delete">
              <h1>₹18,500</h1>
            </strike>
            <h1>at just</h1>
            <span>
              <h1>₹99</h1>
            </span>
            <h1>per year!</h1>
          </div>
          <div>
            <GiOpenBook size={40} className="icon" />
            <h3 className="highlight">100+</h3>
            <h3>Job relevant courses</h3>
          </div>
          <div>
            <FaRegClock size={40} className="icon" />
            <h3 className="highlight">20,000+</h3>
            <h3>Hours of content</h3>
          </div>
          <div>
            <MdLiveTv size={40} className="icon" />
            <h3 className="highlight">Exclusive</h3>
            <h3>webinar access</h3>
          </div>
          <div>
            <FaGraduationCap size={40} className="icon" />
            <h3>Scholarship worth</h3>
            <h3 className="highlight">₹94,000</h3>
          </div>
          <div>
            <BiBlock size={40} className="icon" />
            <h3 className="highlight">Ads Free</h3>
            <h3>Learning experience</h3>
          </div>
        </div>
        <div className="subscription_container">
          <Subscription />
        </div>
      </div>
    </main>
  );
};

export default Payment;
