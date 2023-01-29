

import React from 'react';
import ServiceCard from './ServiceCard';
import { Col } from "reactstrap";
import weatherImg from '../../assets/images/weather.png';
import guideImg from '../../assets/images/guide.png';
import customizationImg from '../../assets/images/customization.png';
const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "this helps calcing ur trriop"

  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "this helps calcing ur trriop"

  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "this helps calcing ur trriop"

  },

]


const ServiceList = () => {
  return (
    <>

      {servicesData.map((item, index) => (
        <Col lg='3' key={index}>
        <ServiceCard item={item} />
      </Col>
      ))};
    </>
  );
};
export default ServiceList;
