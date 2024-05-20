import React from 'react';
import OneClickIntegration from "./OneClickIntegration";
import Promises from "./Promises";
import Brands from "./Brands";
import Package from "./Package";
import ScheduleDemo from "./ScheduleDemo";
import Header from "../../component/Header";
import TechEffect from './TechEffect';
import Footer from './Footer';
import Marketing from './Marketing';
import Reviews from './Reviews';

export default function NewDesign() {
  return (
    
      <>
         <Header />
         <Marketing />
         <TechEffect />
        <OneClickIntegration />
        <Promises />
        <Reviews />
        <Package />
        <ScheduleDemo />
        <Footer />
      </>
    
  )
}
