import "./WeatherWarnings.css";
import { Fragment } from "react";
import WeatherWarningsMain from "./components/WeatherWarningsMain/WeatherWarningsMain";
import Home_Header from "../Home/components/Home_Header/Home_Header";
import Footer from "../../components/Footer/Footer";

const WeatherWarnings = () => {
  return (
    <Fragment>
      <Home_Header />
      <WeatherWarningsMain />
      <Footer />
    </Fragment>
  );
};

export default WeatherWarnings;
