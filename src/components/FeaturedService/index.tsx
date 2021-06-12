import React from "react";

import "./index.less";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faCheck } from "@fortawesome/free-solid-svg-icons";

const FeaturedService = ({ icon, title, description, services = [] }: any) => {
  return (
    <div id="featured-services">
      <div className="icon-container">
        <FontAwesomeIcon icon={icon} className="icon" />
      </div>
      <div className="title">{title}</div>

      <div className="description">{description}</div>

      <div className="services">
        {services.map((service: any, index: any) => (
          <div key={index} className="service-item">
            <FontAwesomeIcon icon={faCheck} className="check-mark" />
            {service}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedService;
