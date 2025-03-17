import Footer from "../../Homepage/Footer";
import ParentHeader from "../../Utils/ParentHeader";
import RidePostForm from "../RidePosting/RidePostComponents/RidePostForm";
import SectionOne from "../RidePosting/RidePostComponents/SectionOne";
import SectionThree from "../RidePosting/RidePostComponents/SectionThree";
import SectionTwo from "../RidePosting/RidePostComponents/SectionTwo";
import RideSearchForm from "./RideSearchForm";

export default function RideSearch() {
  return (
    <div>
      <ParentHeader></ParentHeader>
      <SectionOne></SectionOne>
      <RideSearchForm></RideSearchForm>
      <SectionTwo></SectionTwo>
      <SectionThree></SectionThree>
      <Footer></Footer>
    </div>
  );
}
