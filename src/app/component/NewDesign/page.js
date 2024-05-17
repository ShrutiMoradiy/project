import React from 'react';
import OneClickIntegration from "./OneClickIntegration";
import Promises from "./Promises";
import Brands from "./Brands";
import Package from "./Package";
import ScheduleDemo from "./ScheduleDemo";
import Header from "../../component/Header";
import TechEffect from './TechEffect';

export default function NewDesign() {
  return (
    
      <>
         <Header />
         <TechEffect />
        <OneClickIntegration />
        <Promises />
        <Package />
        <ScheduleDemo />
      </>
    
  )
}
