import "./WaterTemperatures.css";
import { Fragment } from "react";
import Home_Header from "../Home/components/Home_Header/Home_Header";
import Footer from "../../components/Footer/Footer";
import WaterTemperaturesMain from "./components/WaterTemperaturesMain/WaterTemperaturesMain";
const WaterTemperatures = () => {
  return (
    <Fragment>
      <Home_Header />
      <WaterTemperaturesMain />
      <Footer />
    </Fragment>
  );
};

export default WaterTemperatures;
