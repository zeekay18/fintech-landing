import React from "react";

import visaLogo from "../../images/visa-logo.png";
import paypalLogo from "../../images/paypal-logo.png";
import americanExpressLogo from "../../images/american-express-logo.png";
import masterCardLogo from "../../images/master-card-logo.png";
import applePayLogo from "../../images/apple-pay-logo.png";
import payoneerLogo from "../../images/payoneer-logo.png";

import "./index.less";

const CardTypeServices = () => {
  return (
    <div id="card-type-services">
      <img src={visaLogo} className="logo" />
      <img src={paypalLogo} className="logo" />
      <img src={americanExpressLogo} className="logo" />
      <img src={masterCardLogo} className="logo" />
      <img src={applePayLogo} className="logo" />
      <img src={payoneerLogo} className="logo" />
    </div>
  );
};

export default CardTypeServices;
