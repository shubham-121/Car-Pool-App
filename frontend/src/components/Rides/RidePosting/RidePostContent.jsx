// section one
// post ride form
// section two
// footer

import RidePostForm from "./RidePostComponents/RidePostForm";
import { useState } from "react";
import Footer from "../../Homepage/Footer";
import SectionOne from "./RidePostComponents/SectionOne";
import SectionTwo from "./RidePostComponents/SectionTwo";
import SectionThree from "./RidePostComponents/SectionThree";

export default function RidePostContent() {
  return (
    <div>
      <SectionOne></SectionOne>
      <RidePostForm></RidePostForm>
      <SectionTwo></SectionTwo>
      <SectionThree></SectionThree>
      <Footer></Footer>
    </div>
  );
}
