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
import Slider from "../../components/Slider";

import getStartedLogo from "../../images/get-started-logo.png";
import securityBlogLogo from "../../images/security-blog-logo.png";
import cashFlowBlogLogo from "../../images/cash-flow-logo.png";

import "./index.less";
import FeaturedBlog from "../../components/FeaturedBlog";

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
    <Container id="landing-page" fluid>
      <div className="d-none-custom" id="home"></div>
      <AppHeader  />
      <div id="main-content">
      <Slider></Slider>

        <div className="section">
          <CardTypeServices />
        </div>
        <div className="section">
          <Row>
            <Col lg={6} className="d-none d-lg-block">
              <img className="feature-blog-image" src={getStartedLogo} />
            </Col>
            <Col lg={6}>
              <FeaturedBlog
                caption="Why its' important"
                title="Great Start With Mony"
                description="Ultrices natoque mus mattis, aliquam, cras in pellentesque tincidunt elit purus lectus, vel ut aliquet, elementum nunc"
              />
            </Col>
          </Row>
        </div>
        <div className="section">
          <WhyUsSection />
        </div>

        <Row className="section" id="features">
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

        <div className="section" id="about">
          <Row>
            <Col lg={6} className="d-none d-lg-block">
              <img className="feature-blog-image" src={securityBlogLogo} />
            </Col>
            <Col lg={6}>
              <FeaturedBlog
                caption="Hi Security and Protection"
                title="Custom Protection and Safe Transaction"
                description="Ultrices natoque mus mattis, aliquam, cras in pellentesque tincidunt elit purus lectus, vel ut aliquet, elementum nunc"
              />
            </Col>
          </Row>
        </div>

        <div className="section">
          <Row>
            <Col lg={6} className="d-none d-lg-block">
              <img className="feature-blog-image" src={cashFlowBlogLogo} />
            </Col>
            <Col lg={6}>
              <FeaturedBlog
                caption="Everything Under Control"
                title="Be Smart Manage Your Cash Flow"
                description="Ultrices natoque mus mattis, aliquam, cras in pellentesque tincidunt elit purus lectus, vel ut aliquet, elementum nunc"
                extraText={"See How"}
              />
            </Col>
          </Row>
        </div>
      </div>
    </Container>
      
  );
};

export default LandingPage;
