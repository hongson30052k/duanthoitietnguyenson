import Footer from "../../components/Footer/Footer";
import Home_Header from "../Home/components/Home_Header/Home_Header";
import ShowWeatherList from "./components/ShowWeatherList/ShowWeatherList";
import ShowWeatherTitle from "./components/ShowWeatherTitle/ShowWeatherTitle";
import "./ShowWeather.css";
const ShowWeather = () => {
  return (
    <div className="Home-content">
      <div className="ShowWeather">
        <Home_Header />
        <ShowWeatherTitle />
        <ShowWeatherList />
        <Footer />
      </div>
    </div>
  );
};

export default ShowWeather;
