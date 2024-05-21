import React from 'react';
import OneClickIntegration from "./OneClickIntegration";
import Promises from "./Promises";
import OmniChannel from "./OmniChannel";
import Package from "./Package";
import ScheduleDemo from "./ScheduleDemo";
import Header from "../../component/Header";
import TechEffect from './TechEffect';
import Footer from './Footer';
import Marketing from './Marketing';
import Reviews from './Reviews';
import GenAIChat from './GenAIChat';

export default function NewDesign() {
  return (
    
      <>
         <Header />
         <GenAIChat />
         <OmniChannel />
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
