import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardTypeServices from "../../components/CardTypesServices";
import FeaturedService from "../../components/FeaturedService";
import AppHeader from "../../components/Header";
import WhyUsSection from "../../components/whyUs";
import {
  faBrush,
  faBusinessTime,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

import "./index.less";

const featuredServices = [
  {
    title: "Ultrices natoque mus mattis, aliquam, cras in pellentesque",
    description:
      "Ultrices natoque mus mattis, aliquam, cras in pellentesque tincidunt elit purus lectus, vel ut aliquet, elementum nunc",
    services: [
      "ed! Ut penatibus turpis mus",
      "ed! Ut penatibus turpis mus",
      "ed! Ut penatibus turpis mus",
    ],
    icon: faBrush,
  },
  {
    title: "Ultrices natoque mus mattis, aliquam, cras in pellentesque",
    description:
      "Ultrices natoque mus mattis, aliquam, cras in pellentesque tincidunt elit purus lectus, vel ut aliquet, elementum nunc",
    services: [
      "ed! Ut penatibus turpis mus",
      "ed! Ut penatibus turpis mus",
      "ed! Ut penatibus turpis mus",
    ],
    icon: faBusinessTime,
  },
  {
    title: "Ultrices natoque mus mattis, aliquam, cras in pellentesque",
    description:
      "Ultrices natoque mus mattis, aliquam, cras in pellentesque tincidunt elit purus lectus, vel ut aliquet, elementum nunc",
    services: [
      "ed! Ut penatibus turpis mus",
      "ed! Ut penatibus turpis mus",
      "ed! Ut penatibus turpis mus",
    ],
    icon: faHome,
  },
];

const LandingPage = () => {
  return (
    <Container id="landing-page">
      <AppHeader />
      <div id="main-content">
        <h2> Welcome landing page</h2>

        <div className="section">
          <CardTypeServices />
        </div>

        <div className="section">
          <WhyUsSection />
        </div>

        <Row className="section">
          {featuredServices?.map((service, index) => (
            <Col lg={4} key={index} className="featured-services">
              <FeaturedService
                title={service.title}
                description={service.description}
                icon={service.icon}
                services={service.services}
              />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default LandingPage;
